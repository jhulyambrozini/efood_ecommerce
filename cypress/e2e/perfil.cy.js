/// <reference types="cypress" />

describe('Tests for Perfil', () => {
  beforeEach(() => {
    cy.visit('https://efood-ecommerce-delta.vercel.app/')
  })

  it('should take the user to the profile page', () => {
    const knowMorebutton = ':nth-child(1) > .sc-hmdomO > .sc-dcJsrY'
    cy.get(knowMorebutton).click()

    cy.get('h2').should('have.text', 'Bella Tavola Italiana')
  })

  it('should add an item to cart', () => {
    const knowMorebutton = ':nth-child(1) > .sc-hmdomO > .sc-dcJsrY'
    cy.get(knowMorebutton).click()

    const moreDetailsButton = ':nth-child(1) > .sc-dhKdcB > .sc-dcJsrY'
    cy.get(moreDetailsButton).click()

    const addTocartButton = '.sc-imWYAI > .sc-dcJsrY'
    cy.get(addTocartButton).click()

    const foodItem = '.sc-dAlyuH'

    cy.get(foodItem).should('be.visible')
  })

  it('should delete an item from the cart', () => {
    const knowMorebutton = ':nth-child(1) > .sc-hmdomO > .sc-dcJsrY'
    cy.get(knowMorebutton).click()

    const moreDetailsButton = ':nth-child(1) > .sc-dhKdcB > .sc-dcJsrY'
    cy.get(moreDetailsButton).click()

    const addTocartButton = '.sc-imWYAI > .sc-dcJsrY'
    cy.get(addTocartButton).click()

    const deleteButton = '.sc-dAlyuH > .sc-eqUAAy'
    cy.get(deleteButton).click()

    cy.get('[data-testid="paragraph"]').should(
      'have.text',
      'O carrinho está vazio, adicione ao menos um item para continuar com a compra.'
    )
  })

  it('should go to the form', () => {
    const knowMorebutton = ':nth-child(1) > .sc-hmdomO > .sc-dcJsrY'
    cy.get(knowMorebutton).click()

    const moreDetailsButton = ':nth-child(1) > .sc-dhKdcB > .sc-dcJsrY'
    cy.get(moreDetailsButton).click()

    const addTocartButton = '.sc-imWYAI > .sc-dcJsrY'
    cy.get(addTocartButton).click()

    const goToFormButton = ':nth-child(2) > .sc-dcJsrY'

    cy.get(goToFormButton).click()
    cy.get('form h3').should('have.text', 'Entrega')
  })

  it('should fill out the entire form correctly', () => {
    const knowMorebutton = ':nth-child(1) > .sc-hmdomO > .sc-dcJsrY'
    cy.get(knowMorebutton).click()
    const moreDetailsButton = ':nth-child(1) > .sc-dhKdcB > .sc-dcJsrY'
    cy.get(moreDetailsButton).click()

    const addTocartButton = '.sc-imWYAI > .sc-dcJsrY'
    cy.get(addTocartButton).click()

    const goToFormButton = ':nth-child(2) > .sc-dcJsrY'

    cy.get(goToFormButton).click()

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

    const finishOrderButton = '[data-testid="form"] > .sc-dcJsrY'

    cy.get(finishOrderButton).should('be.visible')
  })
})
