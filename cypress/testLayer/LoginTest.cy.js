import LoginPage from "../pageLayer/pageObjects/LoginPage.cy";
import HomePage from "../pageLayer/pageObjects/HomePage.cy";

class LoginTest{
    constructor(){
        this.LoginPage = new LoginPage();
        this.HomePage = new HomePage();
    }

    VerifyUserCanLogin(username, password){
        this.LoginPage.enterUsername(username);
        this.LoginPage.enterPassword(password);
        this.LoginPage.clickOnLoginBtn();
        cy.contains(this.HomePage.viewProductLableText(), 'Products').should('be.visible');
    }
}

export default LoginTest;