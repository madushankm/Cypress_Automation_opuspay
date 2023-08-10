class YourCartPage{
    elements = {
        checkoutBtn: () => cy.get('[data-test="checkout"]')
    }

    clickOnCheckoutBtn(){
        this.elements.checkoutBtn().click();
    }
}

export default YourCartPage;