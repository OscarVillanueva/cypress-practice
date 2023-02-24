// Solo en firefox -> browser: 'firefox'
// en todos excepto en firefox -> browser: '!firefox'
describe('Navigation', { browser: 'firefox' }, () => {
  it('Navigate to the first page', () => {

    cy.visit('https://www.platzi.com')

  })

  it('Reload the page', () => {
    cy.reload()
  })

  it('Hard reload the page', () => {
    cy.visit('https://www.google.com')

    // Reload sin cache
    cy.reload(true)
  })

  it('Go Back', () => {
    cy.visit('https://www.google.com')

    cy.visit("https://www.google.com/search?q=platzi&sxsrf=AJOqlzV3XQKoymN31JWNMm23FpHEERo5-Q%3A1677000751215&source=hp&ei=LwD1Y5jLC8_CkPIPm8aW2AY&iflsig=AK50M_UAAAAAY_UOP8Eq5jb7Cwwo4v7OmCfDwhX1AmUP&ved=0ahUKEwjYnsDQkqf9AhVPIUQIHRujBWsQ4dUDCAc&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyDgguEIAEELEDEMcBENEDMggIABCABBCxAzIFCAAQgAQyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOgYIIxAnEBM6BAgAEEM6CwguEIAEELEDEIMBOgQILhBDOgoILhDHARDRAxBDOhAILhCxAxCDARDHARDRAxBDOhAILhCABBCxAxDHARDRAxAKOgoIABCABBCxAxAKOgcIABCABBAKOg0IABCABBCxAxCDARAKOggIABCABBDLAVAAWM8SYI0UaABwAHgAgAGVAogBogeSAQUxLjMuMpgBAKABAQ&sclient=gws-wiz")

    // back o -1
    cy.go("back")
  })

  it.only('Go forward', () => {
    cy.visit('https://www.google.com')

    cy.visit("https://www.google.com/search?q=platzi&sxsrf=AJOqlzV3XQKoymN31JWNMm23FpHEERo5-Q%3A1677000751215&source=hp&ei=LwD1Y5jLC8_CkPIPm8aW2AY&iflsig=AK50M_UAAAAAY_UOP8Eq5jb7Cwwo4v7OmCfDwhX1AmUP&ved=0ahUKEwjYnsDQkqf9AhVPIUQIHRujBWsQ4dUDCAc&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyDgguEIAEELEDEMcBENEDMggIABCABBCxAzIFCAAQgAQyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOgYIIxAnEBM6BAgAEEM6CwguEIAEELEDEIMBOgQILhBDOgoILhDHARDRAxBDOhAILhCxAxCDARDHARDRAxBDOhAILhCABBCxAxDHARDRAxAKOgoIABCABBCxAxAKOgcIABCABBAKOg0IABCABBCxAxCDARAKOggIABCABBDLAVAAWM8SYI0UaABwAHgAgAGVAogBogeSAQUxLjMuMpgBAKABAQ&sclient=gws-wiz")

    // back o -1
    cy.go(-1)
    cy.go("forward")
  })


})