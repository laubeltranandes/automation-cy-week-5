import URL from "../support/AppUrls";


const loginLocators = {
  emailTextBox: "input[class='email ember-text-field gh-input ember-view']",
  passwordTextBox: "input[class='password ember-text-field gh-input ember-view']",
  signInButton: "button[class='login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view']",
};

export class loginPage {
  goToLoginPage() {
    cy.visit(URL.LandingPageUrl);
  }

  login() {
    cy.get(loginLocators.emailTextBox).type(URL.user)
    cy.get(loginLocators.passwordTextBox).type(URL.password)
    cy.get(loginLocators.signInButton).click()
    cy.wait(2000)
    cy.screenshot('user_logged_in')
  }
}