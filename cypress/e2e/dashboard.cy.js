/// <reference types="cypress" />

// 'describe' agrupa nossos testes. É o nome da "suíte" de testes.
describe('Dashboard de Produtos', () => {
  // 'beforeEach' roda ANTES de cada teste ('it')
  beforeEach(() => {
    // 1. Visita a página inicial
    // O Cypress assume que a base é 'http://localhost:XXXX'
    // Você precisa ajustar a 'baseUrl' no arquivo cypress.config.js
    cy.visit('/');
  });

  it('Deve carregar os produtos e o contador inicial corretamente', () => {
    cy.get('[data-cy="product-counter"]', { timeout: 10000 }) // Aumenta o timeout para 10 segundos
      .should('contain', 'Exibindo 20 produtos');

    cy.get('canvas').should('be.visible');
  })

  it('Deve filtrar os produtos ao selecionar uma categoria', () => {
    cy.get('[data-cy="product-counter"]', { timeout: 10000 }) // Aumenta o timeout para 10 segundos
      .should('contain', 'Exibindo 20 produtos');

    cy.get('#category-select').select('electronics');

    cy.get('[data-cy="product-counter"]')
      .should('contain', 'Exibindo 6 produtos');

    cy.get('#category-select').select('jewelery');

    cy.get('[data-cy="product-counter"]')
      .should('contain', 'Exibindo 4 produtos');
  })
})
