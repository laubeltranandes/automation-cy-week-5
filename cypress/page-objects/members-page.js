

const membersLocators = {
  memberNameTextBox: "#member-name",
  emailTextBox: "#member-email",
  saveButton: ".gh-btn-primary"
};



export class membersPage {

  enterMemberName() {
    cy.get(membersLocators.memberNameTextBox).type("name", {force: true})
    cy.wait(1000)
    cy.screenshot('member_name_added')
  }

  enterEmail(){
    cy.get(membersLocators.emailTextBox).type("user@email.com")
    cy.wait(1000)
    cy.screenshot('member_email_added')
  }

  clickSaveButton(){
    cy.get(membersLocators.saveButton).click()
    cy.wait(3000)
    cy.screenshot('member_saved')
  }


}

