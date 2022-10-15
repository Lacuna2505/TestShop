import basePage from "./BasePage";
import {faker} from '@faker-js/faker';

let user = {
  firstName: faker.name.firstName(),
  lastName:faker.name.lastName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  postcode: faker.address.zipCode(),
  userName: faker.internet.userName(),
  password: faker.internet.password(15)
}

class RegistrationPage extends basePage{
    visit(){
        cy.log('**Open registration page**');
        cy.visit('/index.php?rt=account/create');
    }

    firstNameField(){
       return cy.get('#AccountFrm_firstname');
       
        
    }
    typeTextInFirstNameField(){
    this.firstNameField().type(user.firstName);
    }

    lastNameField(){
        return cy.get('#AccountFrm_lastname');
        
    }

    typeTextInLastNameField(){
        this.lastNameField().type(user.lastName);
    }

    emailField(){
        return cy.get('#AccountFrm_email');
        
    }

    typeTextInEmailField(){
        this.emailField().type(user.email);
    }

    addressField(){
        return cy.get('#AccountFrm_address_1');
    }

    typeTextInAddressField(){
        this.addressField().type(user.address);
    }

    cityField(){
        return cy.get('#AccountFrm_city');
    }

    typeInCityField(){
        this.cityField().type(user.city);
    }

    zoneId(){
        return cy.get('#AccountFrm_zone_id');
    }

    selectZoneid(){
        this.zoneId().select(1);
     }

     postCode(){
        return cy.get('#AccountFrm_postcode');
     }

     typePostCode(){
        this.postCode().type(user.postcode);
     }

     countryId(){
        return cy.get('#AccountFrm_country_id')
     }

     selectCountryId(){
       this.countryId().select('United Kingdom');
     }

     loginName(){
        return cy.get('#AccountFrm_loginname');
     }

     typeLoginName(){
        this.loginName().type(user.userName);
     }

     accPass(){
        return cy.get('#AccountFrm_password');
     }

     typeAccPass(){
        this.accPass().type(user.password);
     }

     confirmPass(){
        return cy.get('#AccountFrm_confirm');
     }

     typeConfirmPass(){
        this.confirmPass().type(user.password);
     }

     newsLetter(){
        return cy.get('#AccountFrm_newsletter0');
     }

     clickOnNewsLetter(){
        this.newsLetter().click();
     }

     formAgree(){
        return cy.get('#AccountFrm_agree');
     }

      continueButton(){
        return cy.get('button[title="Continue"]');
      }

      clickOnContinueButton(){
        this.continueButton().click();
      }

      registrationCheck(){
        return cy.get('h1.heading1');
      }


    

    
}
export default new RegistrationPage();