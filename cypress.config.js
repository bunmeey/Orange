const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "defaultCommandTimeout": 9000,
    "pageLoadTimeout": 50000,
   "viewportHeight": 800,
   "viewportWidth": 1500
   }
   
    //setupNodeEvents(on, config) {
      // implement node event listeners here
    //},
  //},
});
