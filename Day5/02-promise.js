const { resolve } = require("path");

let batonDelivery = new Promise((resolve,reject)=>{

    let isBatonDelivered=false; // The promise is resolved
    if(isBatonDelivered){
        resolve("Baton suceesfully passed!!")
    }
    else{
        reject("The baton was dropped. Race over")
    }

});

batonDelivery
.then(message=>{
console.log(message);
})

.catch(error=>{
console.log(error);

})