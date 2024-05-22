//positive case
describe('Verifikasi edit account dengan valid data', () => {
    beforeEach(function(){
        cy.login();
    })

    it('Edit contact information', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/');
      cy.get('.box.box-information > .box-actions > .action.edit').click();
      cy.get('input#firstname').type('qw updated');
      cy.get('input#lastname').type('qw updated');
      cy.get("button[title='Save'] > span").click();
      cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div').should('contain.text', 'You saved the account information.');
    })

    it('Edit default billing address', () =>{
        cy.visit('https://magento.softwaretestingboard.com/customer/account/');
        cy.get('.box.box-billing-address > .box-actions > .action.edit > span').click();
        cy.get('input#firstname').type('qwqw');
        cy.get('input#lastname').type('qwqw');
        cy.get('input#company').type('qwcompany');
        cy.get('input#telephone').type('082245377522');
        cy.get(".field.required.street > .control > input[name='street[]']").type('qw');
        cy.get(".nested > div:nth-of-type(1) > .control > input[name='street[]']").type('qw');
        cy.get("div:nth-of-type(2) > .control > input[name='street[]']").type('qw');
        cy.get('input#city').type('qw');
        // Saya off in karena hanya berlaku jika edit pertama kali, karena field region yang tadinya dropdown berubah menjadi field text biasa
        //cy.get('#region_id').select('Alabama');
        cy.get('input#region').type('qw');
        cy.get('input#zip').type('61171');
        cy.get('#country').select('Indonesia');
        cy.get("button[title='Save Address'] > span").click();
        cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div').should('contain.text', 'You saved the address.');
    })

    it('Edit default shipping address', () =>{
        cy.visit('https://magento.softwaretestingboard.com/customer/account/');
        cy.get('.box.box-shipping-address > .box-actions > .action.edit > span').click();
        cy.get('input#firstname').type('qwqw');
        cy.get('input#lastname').type('qwqw');
        cy.get('input#company').type('qwcompany');
        cy.get('input#telephone').type('082245377522');
        cy.get(".field.required.street > .control > input[name='street[]']").type('qw');
        cy.get(".nested > div:nth-of-type(1) > .control > input[name='street[]']").type('qw');
        cy.get("div:nth-of-type(2) > .control > input[name='street[]']").type('qw');
        cy.get('input#city').type('qw');
        // Saya off in karena hanya berlaku jika edit pertama kali, karena field region yang tadinya dropdown berubah menjadi field text biasa
        //cy.get('#region_id').select('Alabama');
        cy.get('input#region').type('qw');
        cy.get('input#zip').type('61171');
        cy.get('#country').select('Indonesia');
        cy.get("button[title='Save Address'] > span").click();
        cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div').should('contain.text', 'You saved the address.');
    })

    it('Change password', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/');
      cy.get('.action.change-password').click();
      cy.get('input#firstname').type('qw updated');
      cy.get('input#lastname').type('qw updated');
      cy.get('input#current-password').type('Qw123456!!');
      cy.get('input#password').type('Qw123456!@');
      cy.get('input#password-confirmation').type('Qw123456!@');
      cy.get("button[title='Save'] > span").click();
      cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div').should('contain.text', 'You saved the account information.');
    })

    it('Change email', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/');
      cy.get('.box.box-information > .box-actions > .action.edit').click();
      cy.get('input#change-email').click();
      cy.get('input#email').type('qwsbr@gmail.com');
      cy.get('input#current-password').type('Qw123456!!');
      cy.get("button[title='Save'] > span").click();
      cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div').should('contain.text', 'You saved the account information.');
    })
})

//negative case
 describe('Verifikasi edit account dengan invalid data', () => {
  beforeEach(function(){
    cy.login();
  })

  it('Edit account information dengan null value', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/');
      cy.get('.box.box-information > .box-actions > .action.edit').click();
      cy.get('input#firstname').clear();
      cy.get('input#lastname').clear();
      cy.get("button[title='Save'] > span").click();
      cy.get('div#firstname-error').should('contain.text', 'This is a required field.');
      cy.get('div#lastname-error').should('contain.text', 'This is a required field.');
  })

  it('Edit default billing address dengan null value', () =>{
      cy.visit('https://magento.softwaretestingboard.com/customer/account/');
      cy.get('.box.box-billing-address > .box-actions > .action.edit > span').click();
      cy.get('input#firstname').clear();
      cy.get('input#lastname').clear();
      cy.get('input#company').clear();
      cy.get('input#telephone').clear();
      cy.get(".field.required.street > .control > input[name='street[]']").clear();
      cy.get(".nested > div:nth-of-type(1) > .control > input[name='street[]']").clear();
      cy.get("div:nth-of-type(2) > .control > input[name='street[]']").clear();
      cy.get('input#city').clear();
      cy.get('input#region').clear();
      cy.get('input#zip').clear();
      cy.get('#country').select('');
      cy.get("button[title='Save Address'] > span").click();
      cy.get('div#firstname-error').should('contain.text', 'This is a required field.');
      cy.get('div#lastname-error').should('contain.text', 'This is a required field.');
      cy.get('div#telephone-error').should('contain.text', 'This is a required field.');
      cy.get('div#street_1-error').should('contain.text', 'This is a required field.');
      cy.get('div#city-error').should('contain.text', 'This is a required field.');
      cy.get('div#zip-error').should('contain.text', 'This is a required field.');
      cy.get('div#country-error').should('contain.text', 'Please select an option.');
    })

  it('Edit default shipping address dengan null value', () =>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/');
    cy.get('.box.box-shipping-address > .box-actions > .action.edit > span').click();
    cy.get('input#firstname').clear();
    cy.get('input#lastname').clear();
    cy.get('input#company').clear();
    cy.get('input#telephone').clear();
    cy.get(".field.required.street > .control > input[name='street[]']").clear();
    cy.get(".nested > div:nth-of-type(1) > .control > input[name='street[]']").clear();
    cy.get("div:nth-of-type(2) > .control > input[name='street[]']").clear();
    cy.get('input#city').clear();
    cy.get('input#region').clear();
    cy.get('input#zip').clear();
    cy.get('#country').select('');
    cy.get("button[title='Save Address'] > span").click();
    cy.get('div#firstname-error').should('contain.text', 'This is a required field.');
    cy.get('div#lastname-error').should('contain.text', 'This is a required field.');
    cy.get('div#telephone-error').should('contain.text', 'This is a required field.');
    cy.get('div#street_1-error').should('contain.text', 'This is a required field.');
    cy.get('div#city-error').should('contain.text', 'This is a required field.');
    cy.get('div#zip-error').should('contain.text', 'This is a required field.');
    cy.get('div#country-error').should('contain.text', 'Please select an option.');
  })
})