
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',  // Set your application's base URL
    retries: 2,  // Retry failed tests up to 2 times
    video: true, // Enable video recording for every test run (even on pass)
    screenshotOnRunFailure: true, // Capture screenshots on test failure
    videoCompression: 32, // Optional: set video compression level (1 - best quality, 32 - worst quality)
    videoUploadOnPasses: true, // Upload video even if tests pass
    defaultCommandTimeout: 10000, // Increase timeout for commands
    chromeWebSecurity: false, // Disable Chrome web security for cross-origin requests
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.cy.js", // Set the test file pattern
  },
});


