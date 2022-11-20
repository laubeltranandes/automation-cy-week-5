

const membersLocators = {
  memberNameTextBox: "input[class='email ember-text-field gh-input ember-view']",
  emailTextBox: "input[class='email ember-text-field gh-input ember-view']",
  saveButton: "button[class='gh-btn gh-btn-green gh-btn-icon ember-view']"
};



export class membersPage {


  enterEmail(){
    cy.get(membersLocators.emailTextBox).type("user9@email.com")
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-enterEmail')
  }

  clickSaveButton(){
    cy.get(membersLocators.saveButton).click()
    cy.wait(3000)
    cy.screenshot(Cypress.currentTest.title+ '-clickSaveButton')
  }
}