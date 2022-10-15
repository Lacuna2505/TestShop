///<reference types="cypress"/>
import user from '../fixtures/user.json';
import {searchExistingProduct} from '../support/helper';
import PlaceOrderPage from '../support/pages/PlaceOrderPage';

it('lalala', () => {
    PlaceOrderPage.visit();
    PlaceOrderPage.chooseProductQuantity().type('4');
PlaceOrderPage.addToCart();
PlaceOrderPage.checkoutbutton();
PlaceOrderPage.confirmOrder();
PlaceOrderPage.orderCheck().should('contain', 'Your Order Has Been Processed!');
 PlaceOrderPage.orderCheck2().should('contain', 'Thank you for shopping with us!')
 .and('contain', 'Your order ')
 .and('contain', 'has been created!');
    
  
  })
 
  