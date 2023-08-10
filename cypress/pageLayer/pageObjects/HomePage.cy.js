class HomePage{
    elements = {
        sauceLabsBackpacksBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        sauceLabsBackLightBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        sauceLabsOnesieBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
        shoppingCartBtn: () => cy.get('.shopping_cart_link'),
        productsText: () => cy.get('.title'),
        sauceLabsBackpacksText: () => cy.get('#item_4_title_link > .inventory_item_name'),
        sauceLabsBackLightText: () => cy.get('#item_0_title_link > .inventory_item_name'),
        sauceLabsOnesieText: () => cy.get('#item_2_title_link > .inventory_item_name')
    }

    clickOnAddTocartSauceLabsBackpacksBtn(){
        this.elements.sauceLabsBackpacksBtn().click();
    }
    clickOnAddTocartSauceLabsBackLightBtn(){
        this.elements.sauceLabsBackLightBtn().click();
    }
    ClickOnAddToCartSauceLabsOnesieBtn(){
        this.elements.sauceLabsOnesieBtn().click();
    }
    clickOnShoppingCartBtn(){
        this.elements.shoppingCartBtn().click();
    }
    viewProductLableText(){
        this.elements.productsText();
    }
    // viewSauceLabsBackpacksText(){
    //     this.elements.sauceLabsBackpacksText();
    // }
    // viewSauceLabsBackLighText(){
    //     this.elements.sauceLabsBackLightText();
    //     this.elements.sauceLabsOnesieText();
    // }
    // viewSauceLabsOnesieText(){
    //     this.elements.sauceLabsOnesieText();
    // }

    assertAddeditems(){
        cy.contains('Sauce Labs Backpack').should('be.visible');
    }

    testMethod(){
        
    }
}

export default HomePage;