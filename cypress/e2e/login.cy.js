import LoginTest from "../testLayer/LoginTest.cy";
import Hometest from "../testLayer/HomeTest.cy";
import YourCartTest from "../testLayer/YourCartTest.cy";

const LOGIN_TEST = new LoginTest;
const HOME_TEST = new Hometest;
const YOUR_CART_PAGE = new YourCartTest;

describe('LoginDemo', () => {

  let userdata;

  before( () => {
    cy.fixture("DataProvider.json").then( (data) =>{
      userdata = data;
      cy.visit('/');
    })
    
    // cy.intercept('https://www.saucedemo.com/service-worker.js', {
    //   body: undefined
    //  })
  })
  
  it('TestSuite', () => {
    LOGIN_TEST.VerifyUserCanLogin(userdata.username_1, userdata.password);
    HOME_TEST.addItemsToShoppingCart();
    HOME_TEST.navigateToShoppingCart();
    YOUR_CART_PAGE.proceedToCheckout();
  })

})