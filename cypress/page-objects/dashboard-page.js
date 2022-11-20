import GLOBAL_CONST from "../support/globalConst";


const dashboardLocators = {
  addMembersLink: ".gh-dashboard-zero-message > :nth-child(4)",
  newMemberButton: "a[href='#/members/new/']",
  membersCounter: ".gh-dashboard-box > .gh-dashboard-metric > .gh-dashboard-metric-data > .gh-dashboard-metric-value > .value",
  dashboardLink: "a[href='#/dashboard/']",
  totalMembersSectionLabel: ".gh-dashboard-metric-label",
  topSourcesSectionLabel: ".gh-dashboard-metric-label",
  engagementSectionLabel: "gh-dashboard-metric-label",
  recentPostSectionLabel: "gh-dashboard-metric-label",
  membersLink: "a[href='#/members/']",
  member: "//tr[1]"
};


export class dashboardPage {

  navigateToMemberDetails(){
    cy.xpath(dashboardLocators.member).last().click()
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.dashboard + '-navigateToMemberDetails')
  }

  navigateToAddMember() {
    cy.get(dashboardLocators.addMembersLink).click()
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.dashboard + '-navigateToAddMember')
  }

  navigateToMembers(){
    cy.get(dashboardLocators.membersLink).first().click()
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.dashboard + '-navigateToMembers')
  }

  clickNewMemberButton() {
    cy.get(dashboardLocators.newMemberButton).first().click()
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.dashboard + '-clickNewMemberButton')
  }

  verifyNumberOfMembers(numberOfMembers) {
    cy.get(dashboardLocators.membersCounter).should('have.text', numberOfMembers)
    cy.screenshot(GLOBAL_CONST.dashboard + '-verifyNumberOfMembers')
  }

  navigateToDashboard() {
    cy.get(dashboardLocators.dashboardLink).first().click()
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.dashboard + '-navigateToDashboard')
  }

  verifyTotalMembersSection() {
    cy.get(dashboardLocators.totalMembersSectionLabel).contains("Total members")
    cy.screenshot(GLOBAL_CONST.dashboard + '-verifyTotalMembersSection')
  };

  verifyTopSourcesSection() {
    cy.get(dashboardLocators.topSourcesSectionLabel).contains("Top sources")
    cy.screenshot(GLOBAL_CONST.dashboard + '-verifyTopSourcesSection')
  };

  verifyEngagementSection() {
    cy.get(dashboardLocators.engagementSectionLabel).contains("Engagement")
    cy.screenshot(GLOBAL_CONST.dashboard + '-verifyEngagementSection')
  };

  verifyRecentPostSection() {
    cy.get(dashboardLocators.recentPostSectionLabel).contains("Recent posts")
    cy.screenshot(GLOBAL_CONST.dashboard + '-verifyRecentPostSection')
  };
}