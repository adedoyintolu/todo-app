describe("Test the Login page", () => {
  before(() => {
    // visit the index (login) page
    cy.visit('http://localhost:3000/');
  });

  it("should successfully load the login page", () => {
    cy.get('label').should('contain', 'Email');
    cy.get('form').find('Input').first().should('have.attr', 'type', 'email');
    cy.get('label').should('contain', 'Password');
    cy.get('form').find('Input').last().should('have.attr', 'type', 'password');
  });
 });