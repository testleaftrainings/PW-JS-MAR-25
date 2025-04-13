//Optional Parameters


function userRegistration(fName:string, lName : string, gender:string, height?:number, age?:number){

console.log(`Sign up with ${fName}, ${lName},${gender}`);
}

userRegistration("Ravi","R","M");

//Default Parameters

function profile(username : string, isValid : boolean, profileStatus:string="Available",dob?:string){

    console.log(`Profile Details :${username},${isValid},${profileStatus} `);
    
}
profile("ravitestleaf",true)