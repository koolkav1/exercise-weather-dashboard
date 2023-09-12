
describe('ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the current date', () => {
    const date =   new Date().toISOString().substring(0,10);
    cy.get('[data-cy="card"]').should('contain', date);
  });
});
