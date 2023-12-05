/// <reference types="cypress" />

describe('Tests for Home', () => {
  beforeEach(() => {
    cy.visit('https://efood-ecommerce-jhuly.vercel.app/')
  })

  it('should render with 6 restaurants', () => {
    cy.get('.sc-iJfdHH li').should('have.length', 6)
  })
})
