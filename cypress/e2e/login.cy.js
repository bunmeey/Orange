import {login} from "../fixtures/selectors.js";


describe("Given I am on the orders page", function () {
    beforeEach(function () {
        cy.visit('/')
    });
    it("LOGIN - I Should be able to sign in my account with valid", function () {
      cy.get(login.emailField).type("Admin")
      cy.get(login.Password).type("admin123")
      cy.get(login.loginBtn).click()
    })
})

