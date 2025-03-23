//Named Function:

function funName() {
    console.log("Hello Team");
}
funName();

//function Hoisting 

console.log(funName());

function funName() {
    return "Hello Team Hoisting";
}


//Anonymous Function // Function expression.

let funVar =  () => {
    console.log("Hello Team this is Function Expression / anonymous function");
}
funVar();

let funVar2 =  () => {
    console.log("Hello Team this is Function Expression / anonymous function");
}
funVar2();

//Arrow Function :

let funArrow = () => {
    console.log("Hello Team this is a Arrow Function");
}
funArrow();

/* const multiply = (a, b) => a * b;
console.log(multiply(2, 2)); 
 */


//IIFE - Immediately invoked function

(function(){

console.log(`Hello Team this is a IIFE Function`);

})

()