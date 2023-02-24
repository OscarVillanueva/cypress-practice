const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://example.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        log(message) {
          console.log(`log del task - `, message)
          return null
        }
      })
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
});
