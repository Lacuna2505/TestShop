///<reference types="cypress"/>
import registrationPage from '../support/pages/RegistrationPage.js';
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

it('Registration', () => {
    registrationPage.visit();
  
    registrationPage.typeTextInFirstNameField(user.firstName);
    registrationPage.typeTextInLastNameField(user.lastName);
    registrationPage.typeTextInEmailField(user.email);

  
  })