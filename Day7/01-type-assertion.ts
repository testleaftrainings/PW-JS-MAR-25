//Type Assertion

//using Angular bracket
let response : any = "Record from server";
let myResponse =<string> response;
console.log(myResponse.length);
console.log(typeof myResponse);


//Using as keyword

let sCode : any ="Sucess";
let statusLength = sCode as string;
console.log(statusLength.length);
