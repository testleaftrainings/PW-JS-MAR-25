
//any datatype
let name1 : any  ="Ravi";
name1 =123;

//unknown datatype

let value : unknown;// unknown is similar to that of anu but with certsin conditions


if (typeof value === "number"){
    console.log(value);
}

//tuple

let user : [string, number, boolean]= ["Testleaf",true,true];

console.log(user);
