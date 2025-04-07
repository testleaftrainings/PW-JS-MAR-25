
//Type alias

//Union type alias - |

 let productId :number | string = 123;
 productId="AAA"

 type username = string | number | boolean;

 let userID : username = "ravi@testleaf.com"; // string
 userID = 12345; // number
 userID = true; // boolean

 //Intersection type alias - &

 type Admin = {
adminName : string,
privileges:string[]
age : number
 }

 type Emp = {
name:string,
empId : number,
date: string
age : number
 }

 type eligibility = Admin & Emp 

 const QAuserProfile : eligibility = {
    adminName : "Testleaf",
    privileges: ['server'],
    name:"Ravi",
   empId : 1001,
 date: "03/04/35",
 age:30

 }