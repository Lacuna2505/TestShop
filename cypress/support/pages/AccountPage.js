import basePage from "./BasePage";

class AccountPage extends basePage{
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
export default new AccountPage();