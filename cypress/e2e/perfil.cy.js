/// <reference types="cypress" />

describe('Tests for Perfil', () => {
  beforeEach(() => {
    cy.visit('https://efood-ecommerce-jhuly.vercel.app/')
  })

  it('should take the user to the profile page', () => {
    cy.get('.sc-bBbNsw.eRiKZD a').first().click()
    cy.get('h2').should('have.text', 'Bella Tavola Italiana')
  })

  it('should add an item to cart', () => {
    cy.get('.sc-bBbNsw.eRiKZD a').first().click()
    cy.get('.sc-fnOeiS.kvmMQT button').first().click()
    cy.get('.sc-dIEoRj.fBZSNL button').click()
    cy.get('.sc-ipMvLY.jgxxj').should('be.visible')
  })

  it('should delete an item from the cart', () => {
    cy.get('.sc-bBbNsw.eRiKZD a').first().click()
    cy.get('.sc-fnOeiS.kvmMQT button').first().click()
    cy.get('.sc-dIEoRj.fBZSNL button').click()

    cy.get('.sc-gKHVLF.ewAjbU button').click()
    cy.get('.sc-ipMvLY.jgxxj p').should(
      'have.text',
      'O carrinho está vazio, dicione ao menos um item para continuar com a compra'
    )
  })

  it('should go to the form', () => {
    cy.get('.sc-bBbNsw.eRiKZD a').first().click()
    cy.get('.sc-fnOeiS.kvmMQT button').first().click()
    cy.get('.sc-dIEoRj.fBZSNL button').click()
    cy.get('.sc-ipMvLY > .sc-eDnVMP').click()
    cy.get('form h3').should('have.text', 'Entrega')
  })

  it('should fill out the entire form correctly', () => {
    cy.get('.sc-bBbNsw.eRiKZD a').first().click()
    cy.get('.sc-fnOeiS.kvmMQT button').first().click()
    cy.get('.sc-dIEoRj.fBZSNL button').click()
    cy.get('.sc-ipMvLY > .sc-eDnVMP').click()
    cy.get('#name').type('ana julia')
    cy.get('#adress').type('rua ali perto')
    cy.get('#city').type('são paulo')
    cy.get('#zipCode').type('123.456.789-99')
    cy.get('#number').type('12')

    cy.get('[title="Continuar com o pagamento"]').click()

    cy.get('#cardName').type('ana julia')
    cy.get('#cardNumber').type('9999 9999 9999 9999')
    cy.get('#cardCode').type('123')
    cy.get('#expiresMonth').type('12')
    cy.get('#expiresYear').type('24')

    cy.get('[title="Finalizar o pagamento"]').click()

    cy.get('.sc-pqitP > .sc-eDnVMP').should('be.visible')
  })
})
