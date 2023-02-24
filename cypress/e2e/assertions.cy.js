/// <reference types="cypress" />

describe('Assertions', () => {

  // antes de todas las pruebas
  // before

  // antes de cada prueba
  beforeEach(() => {
    cy.visit("/")
  })

  // Después con after

  it('Should assert', () => {
    cy.url().should("include", "example")

    cy.get("a")
      .should("be.visible")
      .and("have.attr", "href", "https://www.iana.org/domains/example")
  })

  it('Then assert', () => {
    cy.url().should("include", "example")

    cy.get("a").then(anchor => {

      expect(anchor).to.be.visible
      expect(anchor).to.has.attr("href", "https://www.iana.org/domains/example")

    })
  })

  it('assert', () => {
    cy.url().should("include", "example")

    cy.get("a").then(anchor => {

      assert.equal(anchor.attr("href"), "https://www.iana.org/domains/example")

    })
  })

})