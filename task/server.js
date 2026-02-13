const express = require("express");
const app=express();
const fs=require("fs");
const PORT=3000;
app.use(express.urlencoded({ extended: true }));


app.set("view engine","ejs");


app.get("/", (req, res) => {

    fs.readFile("stu.json", "utf-8", (err, data) => {

        let students = [];

        if (!err && data.length > 0) {
            students = JSON.parse(data);
        }

        const selectedBranch = req.query.branch;

        let filteredStudents = students;

        
        if (selectedBranch) {
            filteredStudents = students.filter(s => s.branch === selectedBranch);
        }

        res.render("form", {
            allStudents: filteredStudents,
            totalStudents: filteredStudents.length,
            selectedBranch: selectedBranch || ""
        });
    });

});

app.get("/students/delete/:id", (req, res) => {

    const studentId = req.params.id;

    fs.readFile("stu.json", "utf-8", (err, data) => {

        let students = [];

        if (!err && data.length > 0) {
            students = JSON.parse(data);
        }

        
        const updatedStudents = students.filter(s => s.id !== studentId);

        fs.writeFile("stu.json", JSON.stringify(updatedStudents, null, 2), (err) => {

            if (err) {
                return res.send("Error deleting student");
            }

            res.redirect("/");
        });

    });

});





app.post("/student/register", (req, res) => {

    const newstudent = {
    id: Date.now().toString(), 
    name: req.body.name,
    branch: req.body.branch 
        };


    fs.readFile("stu.json", "utf8", (err, data) => {

        let students = [];

        if (!err && data.length > 0) {
            students = JSON.parse(data);
        }

        students.push(newstudent);

        fs.writeFile("stu.json", JSON.stringify(students, null, 2), (err) => {

            if (err) {
                return res.send("Error saving data");
            }

           
            res.redirect("/");  
        });

    });

});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});