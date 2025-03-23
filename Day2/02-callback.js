

/* function greetEveryone(name, callback1,callback2){

    console.log("Hello"+ name);
    callback1();
    callback2();
}

function displayThanks1() {
    console.log("Thanks for learning with TestLeaf");
   // greetEveryone()
}

function displayThanks2() {
    console.log("Thanks for learning with TestLeaf");
}
greetEveryone("PW Mar Learners",displayThanks1,displayThanks2) */

//Example 2

function checkAvailability (movieName, callback){

console.log(`Checking the movie name`);

setTimeout( () => {

   // movieName="Lord of rings"
    console.log("Movie "+movieName+ "is available");
    callback();  
    
}, 2000);

}
function playMovie(){
console.log(`Now playing the movie`);
}

checkAvailability("Spider Man",playMovie )