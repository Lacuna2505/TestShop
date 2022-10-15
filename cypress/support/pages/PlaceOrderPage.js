import BasePage from "./BasePage";

class placeOrderPage extends BasePage{
    visit(){
        cy.log('**Open place Order Page**');
        cy.visit('/index.php?rt=product/product&product_id=52')
    }

    chooseProductQuantity(){
        cy.get('#product_quantity');
        this.chooseProductQuantity().clear();
    }

    addToCart(){
        cy.get('.productpagecart');
        this.addToCart().click();
    }

    checkoutbutton(){
        cy.get('#cart_checkout1');
        this.checkoutbutton().click;
    }

    confirmOrder(){
        cy.get('#checkout_btn');
        this.confirmOrder.click();
    }

    orderCheck1(){
        return cy.get('h1.heading1');
        
    }

    orderCheck2(){
        return cy.get('.contentpanel');
    }
}
export default new placeOrderPage();
