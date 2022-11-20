import URL from "../support/AppUrls";

const loginLocators = {
  emailTextBox: "#identification",
  passwordTextBox: "#password",
  signInButton: "#ember6",
};

export class loginPage {
  goToLoginPage() {
    cy.visit(URL.LandingPageUrl);
    cy.wait(2000)
    cy.screenshot(Cypress.currentTest.title+ '-goToLoginPage')
  }

  login() {
    cy.get(loginLocators.emailTextBox).type(URL.user)
    cy.get(loginLocators.passwordTextBox).type(URL.password)
    cy.get(loginLocators.signInButton).click()
    cy.wait(2000)
    cy.screenshot(Cypress.currentTest.title + '-login')
  }
}