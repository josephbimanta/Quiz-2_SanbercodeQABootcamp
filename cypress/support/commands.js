// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) =>{
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.header.panel > .header.links > .authorization-link > a').click();
    cy.get('input#email').type('qwqw@gmail.com');
    cy.get('fieldset #pass').type('Qw123456!!');
    cy.get('fieldset .primary:nth-of-type(1) span').click();
});