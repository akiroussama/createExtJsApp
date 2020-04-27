describe("Go to the login page", () => {
    it('Open the login page', () => {
        cy.clearLocalStorage();
        cy.visit('http://localhost:1962/')
        cy.hash().should('eq', '#loginview')
    })
    it('Our E2E testing Scenario', () => {
        // Login
        cy.get('[data-cy=username]')
            .type('Akir', { delay: 100 }).should("have.value", "Akir");
        cy.get('[data-cy=password]')
            .type('1234', { delay: 100 }).should("have.value", "1234");
        cy.get('[data-cy=loginBtn]').should('be.visible').click()
        // Go to the home page, then go to the first screen From Fields
        cy.get('[data-cy=formFieldsview]').should('be.visible')
            .click()//.pause()
        cy.get('[data-cy=extjsVersion]').click().clear().type(' Welcome to SenchaCon 2020', { delay: 100 });

        cy.get('[data-cy=formPwd]').should('be.visible')
            .type('formPwd');
        cy.contains('Browse...').should('be.visible')
            .click({ force: true, multiple: true });//get('[data-cy=filefield]')

        // load the grid and scroll all data
        // cy.get('[data-cy=BufferedRendererView]')
        //     .click()//.pause()
        // cy.get('[data-cy=load]').click()
        // cy.get('#gridpanel-1048-body').get('  x-grid-row').scrollTo('bottom')

    });
    it('cy.viewport() - set the viewport size and dimension', () => {
        // https://on.cypress.io/viewport

        cy.get('#navbar').should('be.visible')
        cy.viewport(320, 480)

        // the navbar should have collapse since our screen is smaller
        cy.get('#navbar').should('not.be.visible')
        cy.get('.navbar-toggle').should('be.visible').click()
        cy.get('.nav').find('a').should('be.visible')

        // lets see what our app looks like on a super large screen
        cy.viewport(2999, 2999)

        // cy.viewport() accepts a set of preset sizes
        // to easily set the screen to a device's width and height

        // We added a cy.wait() between each viewport change so you can see
        // the change otherwise it is a little too fast to see :)

        cy.viewport('macbook-15')
        cy.wait(200)
        cy.viewport('macbook-13')
        cy.wait(200)
        cy.viewport('macbook-11')
        cy.wait(200)
        cy.viewport('ipad-2')
        cy.wait(200)
        cy.viewport('ipad-mini')
        cy.wait(200)
        cy.viewport('iphone-6+')
        cy.wait(200)
        cy.viewport('iphone-6')
        cy.wait(200)
        cy.viewport('iphone-5')
        cy.wait(200)
        cy.viewport('iphone-4')
        cy.wait(200)
        cy.viewport('iphone-3')
        cy.wait(200)

        // cy.viewport() accepts an orientation for all presets
        // the default orientation is 'portrait'
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.viewport('iphone-4', 'landscape')
        cy.wait(200)

        // The viewport will be reset back to the default dimensions
        // in between tests (the  default can be set in cypress.json)
    })
})