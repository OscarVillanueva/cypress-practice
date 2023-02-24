describe('Selectors', () => {

  it("Get element by tag", () => {
    cy.visit("/")
    cy.get("h1")
  })

  it("Get element by attribute", () => {
    cy.visit("/")
    cy.get("[href='https://www.iana.org/domains/example']")
  })

  it("Get element by attribute and a tag", () => {
    cy.visit("/")
    cy.get("a[href='https://www.iana.org/domains/example']")

    // buscar por id
    // cy.get("#id")

    // buscar por clase como en css
    //cy.get(".class")
  })

  it("Get elements by contains", () => {

    cy.visit("/")
    cy.contains("Example Domain")
    cy.contains("p", 'may use')

  })

  it("Get elements by parents", () => {

    cy.visit("/")

    // Obteniendo el elemento padre
    cy.get("a[href='https://www.iana.org/domains/example']").parent()

    // Obteniendo los elementos padres
    cy.get("a[href='https://www.iana.org/domains/example']")
      .parents()
      .find("p")

    // cy.get("form").find("label")
  })

})