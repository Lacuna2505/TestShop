///<reference types="cypress"/>
import user from '../fixtures/user.json';
import placeOrderPage from '../support/pages/PlaceOrderPage';
import {searchExistingProduct} from '../support/helper'

it('Buy product', () => {
    cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);
    placeOrderPage.visit();
    searchExistingProduct('Benefit Bella Bamba');
    placeOrderPage.chooseProductQuantity().clear().type('4');
    placeOrderPage.clickOnTheProductQuantity();
    placeOrderPage.addToCart();
    placeOrderPage.clickOnAddToCart();
    placeOrderPage.checkoutButton();
    placeOrderPage.clickOnCheckoutButton();
    placeOrderPage.confirmOrder();
    placeOrderPage.clickOnConfirmOrder();
    placeOrderPage.orderCheck1().should('contain', 'Your Order Has Been Processed!');
    placeOrderPage.orderCheck2().should('contain', 'Thank you for shopping with us!')
    .and('contain', 'Your order ')
    .and('contain', 'has been created!');
    
  
  })
 
  