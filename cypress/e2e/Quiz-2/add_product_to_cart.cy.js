describe('template spec', () => {
  it('Add Product to Cart from Detail Product page - Size and color size already choosen', () => {
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

  it('Add Product to Cart from Detail Product page - Didnt choose size', () => {
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
    //cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-60').click()
    cy.get('#qty').clear().type('2')
   
    cy.get('#product-addtocart-button > span').click()
    cy.get('div[id="super_attribute[143]-error"]').should('contain.text', 'This is a required field.')
  })

  it('Add Product to Cart from Detail Product page - Didnt choose color', () => {
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
    cy.get('#option-label-size-143-item-168').click()
    //cy.get('#option-label-color-93-item-60').click()
    cy.get('#qty').clear().type('2')
   
    cy.get('#product-addtocart-button > span').click()
    cy.get('div[id="super_attribute[93]-error"]').should('contain.text', 'This is a required field.')
  })

  it('Add Product to Cart from Detail Product page - Input minus quantity', () => {
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
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-60').click()
    cy.get('#qty').clear().type('-2')
   
    cy.get('#product-addtocart-button > span').click()
    cy.get('div[id="super_attribute[93]-error"]').should('contain.text', 'This is a required field.')
  })

  it('Add Product to Cart from Detail Product page - Input bulk quantity', () => {
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
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-60').click()
    cy.get('#qty').clear().type('10000')
   
    cy.get('#product-addtocart-button > span').click()
    cy.get('.message-error > div').should('contain.text', 'The requested qty is not available')
  })

  it('Add Product to Cart from Detail Product page - Input 0 quantity', () => {
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
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-60').click()
    cy.get('#qty').clear().type('0')
   
    cy.get('#product-addtocart-button > span').click()
    cy.get('#qty-error').should('contain.text', 'Please enter a quantity greater than 0.')
  })

  it('Add Product to Cart from Detail Product page - Cart quantity set to minus', () => {
    cy.clearCookies()
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('joseph.sanber1@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('qwerty7890-=')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'Welcome, joseph sanber!')

    cy.get('.showcart').click()
    cy.get('.showcart').should('be.visible')
    cy.get(':nth-child(7) > .secondary > .action > span').click()
    cy.get('#cart-62722-qty').clear()
    cy.get('#cart-62722-qty').type('-5')
    cy.get('.update > span').click()
    cy.get('div[id="cart-62722-qty-error"]').should('contain.text', 'Please enter a number greater than 0 in this field.')
  })

  it.only('Add Product to Cart from Detail Product page - Quantity in cart set to 0', () => {
    cy.clearCookies()
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('joseph.sanber1@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('qwerty7890-=')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text', 'Welcome, joseph sanber!')

    cy.get('.showcart').click()
    cy.get('.showcart').should('be.visible')
    cy.get(':nth-child(7) > .secondary > .action > span').click()
    cy.get('#cart-62722-qty').clear()
    cy.get('#cart-62722-qty').type('0')
    cy.get('.update > span').click()
    cy.get('div[id="cart-62722-qty-error"]').should('contain.text', 'Please enter a number greater than 0 in this field.')
  })
})