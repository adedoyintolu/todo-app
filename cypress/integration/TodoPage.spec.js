describe("Test the Todo page", () => {
    before(() => {
      // visit the todo (todo) page
      cy.visit('http://localhost:3000/todo');
    });
  
    it("should successfully load the todo page", () => {
      cy.get('label').should('have.class', 'complete');
      cy.get('form').find('Input').should('have.attr', 'type', 'text');
      cy.get('form').find('Button').contains('Add Todo');
    //   cy.get('label').should('contain', 'Password');
    //   cy.get('form').find('Input').last().should('have.attr', 'type', 'password');
    });
   });