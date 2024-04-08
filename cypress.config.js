const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  viewportWidth: 1350,
  viewportHeight: 900,
  videoCompression: 51,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.datastealth.io/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  env: {
    email: process.env.email,
    password: process.env.password
  }
});
