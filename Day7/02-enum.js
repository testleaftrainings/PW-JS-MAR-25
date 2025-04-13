/*
//Numeric enum // default

enum TestResult {

    Pass=1,
    Fail,
    Skip
}

function LogTestResult(testName : string, result : TestResult) : void{

console.log(`Test : ${testName}`,`Result Code:${result}`);

}

LogTestResult("Login Page", TestResult.Pass);
LogTestResult("SignUp", TestResult.Fail);
LogTestResult("AccountOpen", TestResult.Skip)


//string enum

enum BrowserType {
Chrome = "chrome",
Firefox = "firefox",
Edge = "edge"

}

function launchBrowser(browserType : BrowserType){

    console.log(`Launch Broweser using ${browserType}`);
}

launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Firefox); */
//heterogenous enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["Open"] = 0] = "Open";
    BrowserStatus[BrowserStatus["Incognito"] = 1] = "Incognito";
    BrowserStatus["Crash"] = "crashed";
    BrowserStatus[BrowserStatus["Close"] = 2] = "Close";
    BrowserStatus[BrowserStatus["Unknown"] = 3] = "Unknown";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    return "Current browser status is ".concat(status);
}
console.log(reportBrowserStatus(BrowserStatus.Incognito));
console.log(reportBrowserStatus(BrowserStatus.Crash));
console.log(reportBrowserStatus(BrowserStatus.Close));
