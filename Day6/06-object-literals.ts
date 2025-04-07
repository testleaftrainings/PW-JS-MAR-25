

//TO access the different properties , you can use dot notation o square bracket notation
let user1 : string = "Ravi"; 

let user2 :{ // user2 -->object
firstName : string, 
lastName : string,
email : string,
isActive : boolean,
phonenumber : number  
}={
    firstName : "Ravindran", // properties
    lastName : "R",
    email : "ravi@testleaf.com",
    isActive : true,
    phonenumber : 99999
}
console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.isActive);


//Square bracket notation

let user3 :{ // user2 -->object
    "first-Name" : string, 
    "lastName" : string,
    email : string,
    isActive : boolean 
    }={
        "first-Name" : "Ravindran", // properties
        lastName : "R",
        email : "ravi@testleaf.com",
        isActive : true 
    }
    console.log(user3["first-Name"]);
    console.log(user3["lastName"]);
    console.log(user3.isActive);
