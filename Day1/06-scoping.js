
var genderType = "male"; // global declaration
function printGender(){

    let color = "brown"; // function scope

    if (genderType.startsWith("female")) {
        var age = 30;
        let color = "pink";
        console.log("She/her favourite colour "+color);     
    } else {
        var age = 35;
        console.log("He/Him : "+color);
    }
console.log(age);

}

printGender();
console.log(genderType);
