const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  screenshotsFolder: "cypress/reports/mochareports/assets",

  // Cypress test settings
  e2e: {
    setupNodeEvents(on, config) {
      
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
