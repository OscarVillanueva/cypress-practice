describe('Wating for elements', () => {

  beforeEach(() => {
    cy.visit('https://www.platzi.com')
  })

  it('Wait for a define time', () => {

    // Esperar por un tiempo definido
    cy.wait(1000)

  })

  it('Wait for a button', () => {
    cy.get('.ButtonLogin-cta', { timeout: 6000 })
  })

  it('Wait for a button and assert', () => {
    cy.get('.ButtonLogin-cta', { timeout: 6000 })
      .should("be.visible")
  })

})

describe('Disable retry', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it.only("Disable retry", () => {
    // cy.get('h1', { timeout: 5000 })

    // Verificar que aparesca al instante con la pagina
    cy.get('h1', { timeout: 0 })
  })

})