///<reference types="cypress"/>
import registrationPage from '../support/pages/RegistrationPage.js';


it('Registration', () => {
    registrationPage.visit();
  registrationPage.firstNameField();
    registrationPage.typeTextInFirstNameField();
    registrationPage.lastNameField();
    registrationPage.typeTextInLastNameField();
    registrationPage.emailField();
    registrationPage.typeTextInEmailField();
    registrationPage.addressField();
    registrationPage.typeTextInAddressField();
    registrationPage.cityField();
    registrationPage.typeInCityField();
    registrationPage.zoneId();
    registrationPage.selectZoneid();
    registrationPage.postCode();
    registrationPage.typePostCode();
    registrationPage.countryId();
    registrationPage.selectCountryId();
    registrationPage.loginName();
    registrationPage.typeLoginName();
    registrationPage.accPass();
    registrationPage.typeAccPass();
    registrationPage.confirmPass();
    registrationPage.typeConfirmPass();
    registrationPage.newsLetter();
    registrationPage.clickOnNewsLetter();
    registrationPage.formAgree().check();
    registrationPage.continueButton;
    registrationPage.clickOnContinueButton();
    registrationPage.registrationCheck;

  
  })