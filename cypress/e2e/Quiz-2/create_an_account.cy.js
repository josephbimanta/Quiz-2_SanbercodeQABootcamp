describe('Login Test', () => {
  it('Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    //cy.clearCookies();
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Maria')
    cy.get('#lastname').type('naomi')
    cy.get('#email_address').type('maria@gmail.com')
    cy.get('#password').type('Maria#123')
    cy.get('#password-confirmation').type('Maria#123')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    //Script for Negative case 



    //Script for Positive Case
    //cy.visit('https://magento.softwaretestingboard.com/');
    //cy.clearCookies();
    //cy.get('.panel > .header > :nth-child(3) > a').click();
    //cy.get('#firstname').type('Goodman')
    //cy.get('#lastname').type('Michael')
    //cy.get('#email_address').type('Michaelgoodman@gmail.com')
    //cy.get('#password').type('Michael#123')
    //cy.get('#password-confirmation').type('Michael#123')
    //cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();

  });
});