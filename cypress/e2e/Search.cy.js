describe('Search functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display a list of shows when a valid search query is entered', () => {
    cy.get('[data-cy="search"]')
      .type('Cobra Kai')
      .should('have.value', 'Cobra Kai');

    cy.get('[data-cy="spinner"]')
      .should('not.exist');

    cy.get('[data-cy="shows"] [data-cy="show"]').should('have.length.greaterThan', 0);

    cy.get('[data-cy="shows"] [data-cy="show"]').first().click();

    cy.url().should('include', '/show/');
    cy.wait(1000);
    cy.get('[data-cy="title"]').should('contain.text', 'Cobra Kai');

  });

  it('should display "No shows were found" if no results match the search query', () => {
    cy.get('[data-cy="search"]')
      .type('NonExistentShow')
      .should('have.value', 'NonExistentShow');

    cy.get('[data-cy="noResults"]').should('contain.text', 'No shows were found');
  });
});
