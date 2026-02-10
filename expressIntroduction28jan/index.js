const express=require('express');
const app=express();
const fs=require('fs');
const { json } = require('stream/consumers');
const students=[
    {id:0,name:"hemant",branch:"cse"},
    {id:1,name:"bhavtosh",branch:"ec"},
    {id:2,name:"akash",branch:"agriculture"},
    {id:3,name:"Sumit",branch:"mechanical"}
]

const updateStudent=async()=>{
    
  fs.readFile("students.json", "utf-8", (err, fileData) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    const students = JSON.parse(fileData);
    // duplicate id check
    if (students.find((s) => s.id === id)) {
      return res.status(400).send("Student already exists");
    }

    // add student object
    students.push(student);

    fs.writeFile(
      "students.json",
      JSON.stringify(students, null, 2),
      (err) => {
        if (err) {
          return res.status(500).send("Error writing file");
        }
        res.status(200).send("Student registered successfully");
      }
    );
  });
}
app.get("/",(req,res)=>{
    res.send("hello");
})
app.use(express.json());

app.get("/students",async(req,res)=>{
    const readfile=await fs.readFile("students.json",'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            return res.status(200).send(JSON.parse(data))
        } 
    }) 
   
})
app.get('/students/:id',(req,res)=>{
    const id=Number(req.params.id);
    const filterstudents=students.find((student)=>{
        student.id===id;
    })
    if(filterstudents){
        res.json(filterstudents);
    }
    else{
        res.status(404).send("student not found");
    }

})
app.get("/students",(req,res)=>{
    const branch=req.query.branch;
    if(!branch){
        res.json(students);
    }
    const searchstudent=students.filter((s)=>s.branch===branch);
    res.json(searchstudent);
})

app.post("/students/register", (req, res) => {
  const student = req.body;
  const { id, name, branch } = student;

  // validation
  if (id < 0 || !name || !branch) {
    return res.status(400).send("Please provide valid details");
  }

  fs.readFile("students.json", "utf-8", (err, fileData) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }

    const students = JSON.parse(fileData);

    // duplicate id check
    if (students.find((s) => s.id === id)) {
      return res.status(400).send("Student already exists");
    }

    // add student object
    students.push(student);

    fs.writeFile(
      "students.json",
      JSON.stringify(students, null, 2),
      (err) => {
        if (err) {
          return res.status(500).send("Error writing file");
        }
        res.status(200).send("Student registered successfully");
      }
    );
  });
});

app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, branch } = req.body;

    if (name) student.name = name;
    if (branch) student.branch = branch;    
    res.send(students)
});

app.delete("/students/:id",(req,res)=>{
    const id=Number(req.params.id);
    const index=students.findIndex((s)=>s.id===id);
    if(index===-1){
        res.status(404).send("student not found");
    }
    else{
        students.splice(index,1);
        res.send(students);
    }
    

})


app.listen(3000,(err)=>{
    console.log("server is running on : http://localhost:3000");
})