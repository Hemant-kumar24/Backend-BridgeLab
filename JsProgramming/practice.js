const user = {name:"hemant",email:"hemant@gmail.com" , phone: 1234567890 , password:"hemant123"}; ;
/methods of object:

const userName = user.name;
const email = user.email;
console.log(userName);
console.log(email);


const {name , email , phone} = user;
console.log(name);
console.log(email);
console.log(phone);


//Object Reference:
const user1={...user};
const user2=user1;
user1.name="hemant kumar";
user2.name="pathak"
console.log(user);
console.log(user1);


//Spread Operator:
const updateUser = {...user , address:"mathura"}
console.log(updateUser);

hide pasword with rest operator  :
const {password,...publicData} = user;
console.log(publicData);

//Array Methods:
const number = [1,2,3,4,5]; 

      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }

    }, 540);

  });
};


//Using the Promise:

fetchUser(2)
  .then(user => {
    console.log("User fetched:", user);
  })
  .catch(err => {
    console.log("Error:", err);
  });


//Async/Await in JavaScript:

const userData = async (userId) => {
    try{
        const user = await fetchUser(userId);
        console.log("User fetched:", user);
    }
    catch(err){
        console.log("Error:", err);
    }
}
userData(1);
userData(3);

//"https://jsonplaceholder.typicode.com/users"
Fetch Data from API in JavaScript:
const url = "https://jsonplaceholder.typicode.com/users";

//using promise :

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("User :", data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
  


const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");

    }
    const data = await response.json();
    console.log("User Data:", data);

  } catch (error){
    console.error("Fetch errors:",error);
  }

  }
fetchData();


