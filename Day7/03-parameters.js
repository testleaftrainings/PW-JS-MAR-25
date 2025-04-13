//Optional Parameters
function userRegistration(fName, lName, gender, height, age) {
    console.log("Sign up with ".concat(fName, ", ").concat(lName, ",").concat(gender));
}
userRegistration("Ravi", "R", "M");
//Default Parameters
function profile(username, isValid, profileStatus, dob) {
    if (profileStatus === void 0) { profileStatus = "Available"; }
    console.log("Profile Details :".concat(username, ",").concat(isValid, ",").concat(profileStatus, ",").concat(dob, " "));
}
profile("ravitestleaf", true, "Busy");
