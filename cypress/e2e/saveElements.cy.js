/// <reference types="cypress" />

describe('Saving Elements', () => {

  it("Get elements by parents", () => {

    cy.visit("/")

    // Obteniendo el elemento padre
    cy.get("a[href='https://www.iana.org/domains/example']").parent()

    // Obteniendo los elementos padres
    cy.get("a[href='https://www.iana.org/domains/example']")
      .parents()
      .find("p")
    //.then(console.log)
    //.debug() lo muestra en consola

    // cy.get("form").find("label")
  })

  it("Avoid repetition", () => {

    cy.visit("/")

    cy.get("a[href='https://www.iana.org/domains/example']")
      .parents()
      .then(elements => {

        const p = elements.find("p")
        const div = elements.find("div")

        expect(p.length).to.eq(2)
        expect(div.length).to.gte(1)

        // pasar de jQuery a Cypress
        cy.wrap(p).should("have.length", 2)

        cy.task("log", p.length)
        cy.log("longitud", p.length)

      })
  })

})