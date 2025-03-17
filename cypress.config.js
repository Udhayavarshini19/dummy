const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:8080', // Set your application's base URL
    retries: 2, // Retry failed tests up to 2 times
    video: true, // Enable video recording on test run
    screenshotOnRunFailure: true, // Automatically capture screenshots on test failure
    chromeWebSecurity: false, // Disable Chrome web security to prevent cross-origin issues
    defaultCommandTimeout: 10000, // Increase timeout for commands
    env: {
      loginUrl: '/login', // Example of setting environment variables
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.cy.js", // Set the test file pattern

    // Mochawesome reporter settings
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    },

    // Screenshot options (more customization)
    screenshot: {
      // Set whether to take a screenshot on failed tests
      onFail: true, // This option is the same as `screenshotOnRunFailure: true`
      capture: "runner", // You can set this to "viewport", "runner", or "both" for different screenshot behaviors
      // Specify screenshot path (defaults to cypress/screenshots)
      screenshotFolder: "cypress/screenshots", // Ensure this folder exists or Cypress will create it
      // Customize the screenshot naming pattern
      fileName: "[name]-[failure-type]-[timestamp].png", // Add more variables if needed
    }
  }
});
