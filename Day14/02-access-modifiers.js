/*
class Browser{

private browserType : string;

constructor(browserType:string){
    this.browserType=browserType
}

private logsession(){
    console.log(`Browser session for ${this.browserType}`)
}

public launchBrowser():string{
    this.logsession();  // private method can be called within the same class
    return `Launching ${this.browserType} browser`
}

}

const browserSession = new Browser(`edge`);
console.log(browserSession.launchBrowser()); */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseClass = /** @class */ (function () {
    function BaseClass(browserType) {
        this.browserType = browserType;
    }
    BaseClass.prototype.logSession = function () {
        console.log("This is from the base class");
        ;
        console.log("Browser Session for ".concat(this.browserType));
    };
    BaseClass.prototype.launchBrowser = function () {
        return " Launching ".concat(this.browserType, " browser");
    };
    return BaseClass;
}());
var DashboardPage = /** @class */ (function (_super) {
    __extends(DashboardPage, _super);
    function DashboardPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardPage.prototype.logSession = function () {
        console.log("this is from the Dashboard page");
    };
    DashboardPage.prototype.captureScreenshot = function () {
        console.log("Capturing screenshot in ".concat(this.browserType));
    };
    return DashboardPage;
}(BaseClass));
var dashboard = new DashboardPage('chromium');
dashboard.captureScreenshot();
/*

Note:

What's happening?
browserType is private, so it can only be used inside the class.

logSession() is private, so it’s also only callable inside the class.

launchBrowser() is public, so you can call it from outside the class.

Outside code can’t do something like browserSession.logSession()




Note : 2

browserType is protected, so:

❌ Cannot be accessed outside the class like obj.browserType

✅ But child classes (like DashboardPage) can access it

Same with logSession() – it could also be used in child classes if needed

launchBrowser() is public, so it's accessible from outside*/ 
