

const dashboardLocators = {
  addMembersLink: ".gh-dashboard-zero-message > :nth-child(4)",
  newMemberButton: "a[href='#/members/new/']",
  membersCounter: ".gh-dashboard-box > .gh-dashboard-metric > .gh-dashboard-metric-data > .gh-dashboard-metric-value > .value",
  dashboardLink: "a[href='#/site/']",
  totalMembersSectionLabel: ".gh-dashboard-metric-label",
  topSourcesSectionLabel: ".gh-dashboard-metric-label",
  engagementSectionLabel: "gh-dashboard-metric-label",
  recentPostSectionLabel: "gh-dashboard-metric-label",
  membersLink: "a[href='#/members/']",
  member: "//tr[1]",
  staffLink: "a[href='#/staff/']",
  invitePeopleButton: "button[class='gh-btn gh-btn-green']"
};


export class dashboardPage {

  navigateToStaff(){
    cy.get(dashboardLocators.staffLink).first().click()
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-navigateToStaff')
  }

  navigateToMemberDetails(){
    cy.xpath(dashboardLocators.member).last().click()
    cy.wait(1000)
    cy.screenshot('navigate_to_member_detail')
  }

  navigateToAddMember() {
    cy.get(dashboardLocators.invitePeopleButton).first().click()
    cy.wait(1000)
    cy.screenshot('navigate_to_add_member')
  }

  navigateToMembers(){
    cy.get(dashboardLocators.membersLink).first().click()
    cy.wait(1000)
    cy.screenshot('navigate_to_members')
  }

  clickNewMemberButton() {
    cy.get(dashboardLocators.newMemberButton).first().click()
    cy.wait(1000)
    cy.screenshot('new_member_page')
  }

  verifyNumberOfMembers(numberOfMembers) {
    cy.get(dashboardLocators.membersCounter).should('have.text', numberOfMembers)
  }

  navigateToDashboard() {
    cy.get(dashboardLocators.dashboardLink).click()
    cy.wait(1000)
    cy.screenshot('navigate_to_dashboard')
  }

  verifyTotalMembersSection() {
    cy.get(dashboardLocators.totalMembersSectionLabel).contains("Total members")
  };

  verifyTopSourcesSection() {
    cy.get(dashboardLocators.topSourcesSectionLabel).contains("Top sources")
  };

  verifyEngagementSection() {
    cy.get(dashboardLocators.engagementSectionLabel).contains("Engagement")
  };

  verifyRecentPostSection() {
    cy.get(dashboardLocators.recentPostSectionLabel).contains("Recent posts")
  };

}





