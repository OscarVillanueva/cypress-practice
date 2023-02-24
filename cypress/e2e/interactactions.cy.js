/// <reference types="cypress" />

describe('Interacting with elements', () => {

  it("Basic Click", () => {

    cy.visit("https://demoqa.com/buttons")

    // sacamos el 3er boton
    cy.get('button').eq(3).click()

    cy.get("#dynamicClickMessage")
      .should('be.visible')
      .and("contain", "You have done a dynamic click")

  })

  it("Double Click", () => {

    cy.visit("https://demoqa.com/buttons")

    // sacamos el 3er boton
    cy.get('#doubleClickBtn').dblclick()

    cy.get("#doubleClickMessage")
      .should('be.visible')
      .and("contain", "You have done a double click")

  })

  it("Right Click", () => {

    cy.visit("https://demoqa.com/buttons")

    // sacamos el 3er boton
    cy.get('#rightClickBtn').rightclick()

    cy.get("#rightClickMessage")
      .should('be.visible')
      .and("contain", "You have done a right click")

  })

  it("Force Click", () => {

    cy.visit("https://demoqa.com/dynamic-properties")

    cy.get("#enableAfter").click({ force: true })

  })

  it("Click by position", () => {
    cy.visit("https://demoqa.com/buttons")

    cy.get("buttons").eq(3).parent().parent().click({ position: "topRight" })

    // click por la posición x, y
    cy.get("buttons").eq(3).parent().parent().click(5, 60)

  })

  it("Inputs", () => {
    cy.visit("https://demoqa.com/automation-practice-form")

    cy.get("#firstName").type("Oscar")
    cy.get("#lastName").type("Villanueva")

    cy.get("#firstName").type("{selectAll}{backspace}")
    cy.get("#firstName").type("Javier")

    cy.get("#firstName").clear()

  })

  it("Checkboxes and radio buttons", () => {
    cy.visit("https://demoqa.com/automation-practice-form")

    // cy.get("#gender-radio-1").click()
    // cy.get("#gender-radio-1").check()
    //radio
    cy.get("label[for='gender-radio-1']").click()

    // Check
    cy.get("label[for='hobbies-checkbox-1']").check()

  })

  it("Get info", function () {
    cy.visit("https://demoqa.com/automation-practice-form")

    cy.get("#firstName").as("name")
    cy.get("@name").type("Javier")

    cy.get("@name").then(name => {

      expect(name.val()).to.equal("Javier");

    })

    cy.get("@name").invoke("val").should("eq", "Javier")
    cy.get("@name").invoke("val").as("globalName")
  })

  it("Share info", function () {
    cy.visit("https://demoqa.com/automation-practice-form")

    cy.get("#lastName").as("lastName")
    cy.get("@lastName").type(this.globalName)

  })

  it("Dropdowns (select)", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")

    cy.get(".custom-select").select(10)
    cy.get(".custom-select").select('3').should("have.value", '3')
    cy.get(".custom-select").select('Greece').should("have.value", '4')

  })

  it("Dropdowns (select)", () => {
    cy.visit("https://react-select.com/home")

    cy.get("#react-select-6-input").type(" ")

    cy.get("#react-select-6-listbox")
      .children() // Obtenemos el modal con las opciones
      .children() // Obtenemos las opciones
      .each((el, index, list) => {

        if (el.text() === "Red") {
          cy.wrap(el).click()
        }

      })

    // cy.get("#react-select-6-option-3").click()

  })

  it("Tables", () => {
    cy.visit("https://w3schools.com/html/html_tables.asp")

    cy.get("#customers")
      .find("th")
      .first()
      .invoke("text")
      .should("eq", "Company")

    cy.get("#customers")
      .find("th")
      .eq(2)
      .first()
      .invoke("text")
      .should("eq", "Contact")

    cy.get("#customers")
      .find("th")
      .eq(3)
      .first()
      .invoke("text")
      .should("eq", "Country")

    cy.get("#customers")
      .find("tr")
      .should("have.length", 7)

    cy.get("#customers")
      .find("tr")
      .eq(1)
      .find("td")
      .eq(1)
      .invoke("text")
      .should("eq", "Maria Anders")

  })

  it("DatePickers", () => {
    cy.visit("https://material.angular.io/components/datepicker/overview")

    cy.get('.ng-star-inserted')
      .find("input")
      .eq(0)
      .type("11/03/2022", { force: true })

    cy.get('.ng-star-inserted')
      .find("svg")
      .eq(0)
      .click({ force: true })

    cy.get('table.mat-calendar-table')
      .find("tr.ng-star-inserted")
      .eq(2)
      .find("td button")
      .eq(0)
      .click({ force: true })

  })

  it("Modals", () => {
    cy.visit("https://demoqa.com/modal-dialogs")

    cy.get('#showModal').click()
    cy.get('#closeModal').click()

  })

  it("Popups", () => {
    cy.visit("https://demoqa.com/alerts")

    // creamos un espía para verificar que la función se llamo y se dio clic en aceptar
    // const stub = cy.stub()
    // cy.on("window:confirm", stub)

    // cy.get('#confirmButton').click().then(() => {
    //   expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
    // })

    // cy.get("#confirmButton").click()
    // cy.on("window:confirm", confirm => {
    //   expect(confirm).to.eq('Do you confirm action?')
    // })

    // cy.contains("You selected Ok").should("exist")

    // Rechazar alertas
    cy.get("#confirmButton").click()
    cy.on("window:confirm", confirm => {
      expect(confirm).to.eq('Do you confirm action?')
      return false
    })

    cy.contains("You selected Cancel").should("exist")

  })

  it("Tooltips", () => {
    cy.visit("https://demoqa.com/tool-tips")

    cy.get("#toolTipButton").trigger("mouseover")
    cy.contains("You hovered over the Button").should("exist")

    cy.get("#toolTipButton").trigger("mouseout")
    cy.contains("You hovered over the Button").should("not.exist")
  })

  it.only("Drag and drop", () => {
    cy.visit("https://demoqa.com/dragable")

    cy.get("#dragbox")
      .trigger("mousedown", { which: 1, pageX: 600, pageY: 100 })
      .trigger("mousemove", { which: 1, pageX: 600, pageY: 600 })
      .trigger("mouseup")
  })
})