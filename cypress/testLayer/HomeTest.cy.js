import HomePage from "../pageLayer/pageObjects/HomePage.cy";

class Hometest{
    constructor(){
        this.HomePage = new HomePage;
    }

    addItemsToShoppingCart(){
        this.HomePage.clickOnAddTocartSauceLabsBackpacksBtn();
        this.HomePage.clickOnAddTocartSauceLabsBackLightBtn();
        this.HomePage.ClickOnAddToCartSauceLabsOnesieBtn();
    }
    navigateToShoppingCart() {
        this.HomePage.clickOnShoppingCartBtn();
        cy.contains('Sauce Labs Backpack').should('be.visible');
        cy.contains('Sauce Labs Bike Light').should('be.visible');
        cy.contains('Sauce Labs Onesie').should('be.visible');
    }
}

export default Hometest;