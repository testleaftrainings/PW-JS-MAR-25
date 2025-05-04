import {test} from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"

test(`Test to login using valid credentials`,async() => {

    const loginPage = new LoginPage();
    await loginPage.initialize();
    await loginPage.navigateTo("https://login.salesforce.com/?locale=in");
    await loginPage.login("ravindran.ramdas@testleaf.com","Ravitest#1432");
    await loginPage.close();
    
})