/*
String Declaration:

1. String Literal.
2. Object Literal.

String Literal - '', "",``
let firstName = "Ravindran";
let username = "Ravindran";

String object 
let firstName = new String("Ravindran");
let username = new String ("Ravindran");

*/
//literal declaration both firstName and username is going to point towards one memory location

/* let firstName = "Ravindran";
let username = "ABC";
console.log(firstName===username);//Output : True
console.log(typeof firstName); */


//String object both firstName and username is going to be a different memory address

/* let firstName1 = new String("Ravindran");
let username1 = new String ("Ravindran");
console.log(firstName1===username1); //Output : False
console.log(typeof firstName1); */


//Escape sequence
/* let testType = 'It\'s a regression testing'
let stringType = "Hello, this is a \"double quote\"";
console.log(testType);
console.log(stringType); */


//concatenation - concat()
let testcaseName = "Create a new Lead";
let testcaseId = 123;
let result = testcaseId.toString().concat(testcaseId);
console.log(result);



//Template literal
/* let testcases = 200;
let output =`There are ${testcases} testcases`
console.log(output); */

//String methods 
//length

//length - starts from 1
//index starts from 0
//console.log(`The length of the string is ${coursename.length}`);

//charAt
//console.log(`The first character of the string is ${coursename.charAt(2)}`);

//indexOf - index of that character
//console.log(`The index of a is ${coursename.indexOf("a")}`);

//includes - true/ false
//console.log(`${coursename.includes('zz')}`);

let coursename = "playwright";
//slice
let outputMessage = coursename.slice(-4,-1)
console.log(outputMessage);

//split
let companyName = "Testleaf Private Limited";
let array = companyName.split("");
console.log(array);


//substring
let outputMessage1 = coursename.substring(-5,4)
console.log(outputMessage1);

//String reversal




