//Nested if or Multiple conditions to check
/* function getBrowser() {
    if (browserName === "chrome") {
        console.log("Supported Browser");

    } else if (browserName === "edge") {
        console.log(" Supported Browser edge");
    }
    else {
        console.log(" Not a Supported Browser");
    }
}
let browserName = "edge";
getBrowser(); */

//Switch statement

function getVersion() {

    switch (browser) {
        case 'Chrome':
            console.log("131");
            break;

        case 'edge':
            console.log("132");
            break;

        case 'firefox':
            console.log("128");
            break;

        default:
        console.log("Unsupported Browser");
            break;
    }
}
let browser = "Chrome";
getVersion();
