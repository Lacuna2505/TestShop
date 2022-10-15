import BasePage from "./BasePage";

class accountPage extends BasePage{
    visit(){
        cy.log('**Open login page**');
        cy.visit('/index.php?rt=account/account');
    }

   getUserNameFromHeading(){
        return cy.get('h1.heading1');
   }

   getAlertText(){
        return cy.get('div.alert-error');
   }
}
export default new accountPage();