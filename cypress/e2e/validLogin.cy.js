import { login } from "../fixtures/selectors.js";


export const validLogin = () => {
    cy.wait(5000);
    cy.get(login.emailField).type("Admin")
    cy.get(login.Password).type("admin123")
    cy.get(login.loginBtn).click()
    cy.wait(5000);
    cy.contains("Dashboard").should("be.visible")
}