import URL from "../support/AppUrls";
import GLOBAL_CONST from "../support/globalConst";


const loginLocators = {
  emailTextBox: "input[class='email ember-text-field gh-input ember-view']",
  passwordTextBox: "input[class='password ember-text-field gh-input ember-view']",
  signInButton: "button[class='login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view']",
};

export class loginPage {
  goToLoginPage() {
    cy.visit(URL.LandingPageUrl);
    cy.wait(2000)
    cy.screenshot(GLOBAL_CONST.login + '-goToLoginPage')
  }

  login() {
    cy.get(loginLocators.emailTextBox).type(URL.user)
    cy.get(loginLocators.passwordTextBox).type(URL.password)
    cy.get(loginLocators.signInButton).click()
    cy.wait(2000)
    cy.screenshot(GLOBAL_CONST.login + '-login')
  }
}