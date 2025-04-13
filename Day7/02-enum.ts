/* 
//Numeric enum // default

enum TestResult {

    Pass=1,
    Fail,
    Skip
}

function LogTestResult(testName : string, result : TestResult) : void{

return`Test : ${testName}`,`Result Code:${result}`;

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

enum BrowserStatus {
    Open,
    Incognito,   
    Crash = "crashed",
    Close=2,
    Unknown  
}

function reportBrowserStatus(status : BrowserStatus):string {

    return `Current browser status is ${status}`
}

console.log(reportBrowserStatus(BrowserStatus.Incognito));
console.log(reportBrowserStatus(BrowserStatus.Crash));
console.log(reportBrowserStatus(BrowserStatus.Close));

