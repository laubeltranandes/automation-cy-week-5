import GLOBAL_CONST from "../support/globalConst";


const membersLocators = {
  memberNameTextBox: "#member-name",
  emailTextBox: "#member-email",
  saveButton: ".gh-btn-primary"
};



export class membersPage {

  enterMemberName() {
    cy.get(membersLocators.memberNameTextBox).type("name", {force: true})
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.members + '-enterMemberName')
  }

  enterEmail(){
    cy.get(membersLocators.emailTextBox).type("user@email.com")
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.members + '-enterEmail')
  }

  clickSaveButton(){
    cy.get(membersLocators.saveButton).click()
    cy.wait(3000)
    cy.screenshot(GLOBAL_CONST.members + '-clickSaveButton')
  }
}