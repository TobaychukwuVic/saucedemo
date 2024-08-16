const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 300000,
    defaultCommandTimeout: 120000,
    requestTimeout: 300000,
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges: false,
    chromeWebSecurity: false ,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

