describe('Verifikasi Berhasil Login', () => {
    it('Login Berhasil - Email & Password Valid', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.get('#email').type('Seniaguzman@gmail.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Maria#123')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
})
    describe('Verifikasi Gagal Login', () => {
        it('Login Gagal - Email Tidak Valid', () => {
          cy.visit('https://magento.softwaretestingboard.com/')
          cy.get('.panel > .header > .authorization-link > a').click()
          cy.get('#email').type('random@gmail.com')
          cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Maria#123')
          cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
          cy.get('.message-error').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
        })

        it('Login Gagal - Password Tidak Valid', () => {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.get('.panel > .header > .authorization-link > a').click()
            cy.get('#email').type('Seniaguzman@gmail.com')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('random')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
            cy.get('.message-error').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
          })

          it('Login Gagal - Mengosongkan Email', () => {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.get('.panel > .header > .authorization-link > a').click()
            cy.get('#email')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Maria#123')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
            // cy.get('.message-error').should('equal','A login and a password are required.')
            // // cy.get('.fieldset').should('contain.text','* Required Fields')
            cy.get('#email-error').should('contain','This is a required field.')
        })

          it('Login Gagal - Mengosongkan Password', () => {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.get('.panel > .header > .authorization-link > a').click()
            cy.get('#email').type('Seniaguzman@gmail.com')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
            cy.get('#pass-error').should('contain.text','This is a required field.')
          })






})





