describe("Go to the login page", () => {
    it('Open the login page', () => {
        cy.clearLocalStorage();
        cy.visit('http://localhost:1962/#login')
    })
    it('Set username and password!', () => {
        cy.get('[data-cy=username]')
            .type('Akir');
        cy.get('[data-cy=password]')
            .type('1234');
        cy.get('[data-cy=loginBtn]').click();
        cy.get('[data-cy=formFieldsview]')
            .click();
        cy.get('[data-cy=BufferedRendererView]')
            .click();
        cy.get('[data-cy=load]').click();
        cy.get('[data-cy=BufferedRendererGrid]');
    });
})