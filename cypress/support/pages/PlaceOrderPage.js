import basePage from "./BasePage";

class PlaceOrderPage extends basePage{
    visit(){
        cy.log('**Open place Order Page**');
        cy.visit('/index.php?rt=product/product&product_id=52')
    }

    chooseProductQuantity(){
        return cy.get('#product_quantity');
        
    }
    
    clickOnTheProductQuantity(){
       this.chooseProductQuantity().click();
     }

    addToCart(){
        return cy.get('.productpagecart');
        
    }
    clickOnAddToCart(){
        this.addToCart().click();
    }

    checkoutButton(){
        return cy.get('#cart_checkout1');
        
    }

    clickOnCheckoutButton(){
        this.checkoutButton().click();
    }

    confirmOrder(){
        return cy.get('#checkout_btn');
    }

    clickOnConfirmOrder(){
        this.confirmOrder().click();
    }

    orderCheck1(){
        return cy.get('h1.heading1');
        }

    orderCheck2(){
        return cy.get('.contentpanel');
    }
}
export default new PlaceOrderPage();
