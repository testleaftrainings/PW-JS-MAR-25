//TO access the different properties , you can use dot notation o square bracket notation
var user1 = "Ravi";
var user2 = {
    firstName: "Ravindran", // properties
    lastName: "R",
    email: "ravi@testleaf.com",
    isActive: true
};
console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.isActive);
//Square bracket notation
var user3 = {
    "first-Name": "Ravindran", // properties
    lastName: "R",
    email: "ravi@testleaf.com",
    isActive: true
};
console.log(user3["first-Name"]);
console.log(user3.lastName);
console.log(user3.isActive);
