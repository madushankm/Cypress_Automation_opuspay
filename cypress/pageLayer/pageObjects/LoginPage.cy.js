class LoginPage{
    elements = {
        usernameInput:() => cy.get('[data-test="username"]'),
        passwordinput:() => cy.get('[data-test="password"]'),
        loginBtn:() => cy.get('[data-test="login-button"]')
    }

    enterUsername(username){
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }
    enterPassword(password){
        this.elements.passwordinput().clear();
        this.elements.passwordinput().type(password);
    }
    clickOnLoginBtn(){
        this.elements.loginBtn().click();
    }
}

export default LoginPage;