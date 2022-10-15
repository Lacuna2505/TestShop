import BasePage from "./BasePage";


class registrationPage extends BasePage{
    visit(){
        cy.log('**Open registration page**');
        cy.visit('/index.php?rt=account/create');
    }

    typeTextInFirstNameField(firstName){
       cy.get('#AccountFrm_firstname');
       this.typeTextInFirstNameField().type(firstName);
        
    }

    typeTextInLastNameField(lastName){
        cy.get('#AccountFrm_lastname');
        this.typeTextInFirstNameField().type(lastName);
    }

    typeTextInEmailField(email){
        cy.get('#AccountFrm_email');
        this.typeTextInEmailField().type(email);
    }

    
}
export default new registrationPage();