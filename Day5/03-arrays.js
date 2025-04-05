//Using array literal 
/* 
let names = ["a","b","c","d","e"];
console.log(names);

//Using Array Constructor :

let numbers = new Array(5);//Creates an array with 5 empty slots -- [ <5 empty items> ]
numbers = [1,2,3,4,5]
console.log(numbers); */


//push - add one or more elements to the end of an array

/* let letters = ["a","b","c","d","e"];
letters.push('f');
console.log(letters); */

//pop - remove one or more elements from the end of an array

/* let letters = ["a","b","c","d","e"];
letters.pop();
console.log(letters); */

//shift - remove first element of an array

/* let letters = ["a","b","c","d","e"];
letters.shift();
console.log(letters);  */

//unshift - add one or more elements to the beginning of the array

/* let letters = ["a","b","c","d","e"];
letters.unshift("x","y","z");
console.log(letters);  */

//slice() -extracts a section of an array without modifying the original

/* let letters = ["a","b","c","d","e"];
let result = letters.slice(0,4);
console.log(result); */

//splice() - add or remove elements from the array

let letters = ["a","b","c","d","e"];
/* //let result = letters.splice(1,1,"x");
letters.splice(1,2,"x","y");
console.log(letters); */

//spread syntax[...array]

/* let numbers1= [1,2,3,4];
let numbers2= [5,6,7,8]; */

/* let mergedArray=[...numbers1,...letters]
console.log(mergedArray); */

/* let mergeConcat = numbers1.concat(numbers2)
console.log(mergeConcat); */

//sorting the array --> lexicographical way 

let numberArray = [6,1,4,4,9,100];
//numberArray.sort();
/* numberArray.sort((a,b)=>a-b)
console.log(numberArray);

numberArray.sort((a,b)=>b-a)
console.log(numberArray); */


//filter method

/* let even = numberArray.filter((num)=>num%2===0);
console.log(even); */


//map method
let squared = numberArray.map((num)=>num*num);
console.log(squared);


