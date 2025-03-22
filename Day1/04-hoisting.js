
//Hoisting

//Internally --> var x; (x value is undefined)
console.log(x);
var x=10;

//Internally --> let y; (Throws a reference error))
console.log(y);
let y=20;

//Internally --> const z; (Throws a reference error)
console.log(z);
const z=30;