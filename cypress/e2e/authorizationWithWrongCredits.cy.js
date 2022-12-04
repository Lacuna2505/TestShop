///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage.js';
import accountPage from '../support/pages/AccountPage.js';
import user from '../fixtures/user.json';

it('Authorization with wrong password', () => {
  authorizationPage.visit();

  authorizationPage.submitLoginForm(user.userName, 'user.password');
  accountPage.getAlertText().should('contain', ' Incorrect login or password provided.');
  
})

it('Authorization with wrong login', () => {
  authorizationPage.visit();

  authorizationPage.submitLoginForm('user.userName', user.password);
  accountPage.getAlertText().should('contain', ' Incorrect login or password provided.');
  
})

it('Authorization without credits', () => {
  authorizationPage.visit();

  authorizationPage.getLoginButton().click();
  accountPage.getAlertText().should('contain', ' Incorrect login or password provided.');
  
})