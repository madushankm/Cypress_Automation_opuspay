import YourCartPage from "../pageLayer/pageObjects/YourcartPage.cy";

class YourCartTest{
    constructor(){
        this.YourCartPage = new YourCartPage();
    }

    proceedToCheckout(){
        this.YourCartPage.clickOnCheckoutBtn();
        cy.contains('Checkout: Your Information').should('be.visible');
    }
}

export default YourCartTest;