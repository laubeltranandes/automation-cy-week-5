

const membersLocators = {
  memberNameTextBox: "#member-name",
  emailTextBox: "#member-email",
  saveButton: ".gh-btn-primary"
};



export class membersPage {

  enterMemberName(name) {
    cy.get(membersLocators.memberNameTextBox).type(name, {force: true})
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-enterMemberName')
  }

  enterEmail(email){
    cy.get(membersLocators.emailTextBox).type(email)
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-enterEmail')
  }

  clickSaveButton(){
    cy.get(membersLocators.saveButton).click()
    cy.wait(3000)
    cy.screenshot(Cypress.currentTest.title+ '-clickSaveButton')
  }


}

