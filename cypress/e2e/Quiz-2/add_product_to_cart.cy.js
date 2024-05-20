describe('template spec', () => {
  it('specs', () => {
    cy.clearCookies()
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('joseph.sanber1@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('qwerty7890-=')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'Welcome, joseph sanber!')

    cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover')
    cy.get('#ui-id-5 > .ui-menu-icon').should('be.visible')
    cy.get('#ui-id-17').trigger('mouseover')
    cy.get('#ui-id-17').should('be.visible')
    cy.get('#ui-id-21').click()

    cy.get(':nth-child(5) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('#option-label-size-143-item-169').click()
    cy.get('#option-label-color-93-item-49').click()
    cy.get('#qty').clear().type('2')
    cy.get('#product-addtocart-button > span').click()
    cy.get('.message-success > div').should('contain.text', 'You added Aero Daily Fitness Tee to your shopping cart.')
  })
})