const tagLocators = {
  pagesLink:"a[href='#/pages/']",
  newPageButton: "a[href='#/editor/page/']",
  inputPageTitle: "textarea[class='gh-editor-title ember-text-area gh-input ember-view']",
  inputPageEditTitle: "textarea[class='gh-editor-title ember-text-area gh-input ember-view']",
  textAreaPageDescriptionContent: "div.koenig-editor__editor.__mobiledoc-editor",
  publishButton: "div[class='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']",
  publishRightNowButton: "button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']",
  backToEditorButton: "button[class='gh-back-to-editor']",
  pageTitle: "h3[class='gh-content-entry-title']",
  pageStatus: 'span[class="gh-content-status-draft gh-badge gh-badge-purple nowrap"]',
  pageScheduledStatus: 'span[class="gh-content-status-draft gh-badge nowrap"]',
  pageItemList: "li[class='gh-list-row gh-posts-list-item']",
  updateButton: 'div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]',
  updateConfirmbutton: 'button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]',
  unpublishButton: 'button[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]',
  confirmationUnpublishButton: 'button[class="gh-revert-to-draft"]',
  pageSettingButton: 'button[class="post-settings"]',
  deletePageButton: 'button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]',
  confirmationDeletePageButton: 'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]',
  publishPageModeButton: 'button[class="gh-publish-setting-title "]',
  scheduleForLateButton: 'div .gh-publish-schedule > div',
  dateToScheduleInput: 'div .ember-power-calendar > div:first-child > div:first-child > input',
  goBackToPageEditorButton: 'button[class="gh-btn-editor gh-publish-back-button"]',
  unpublishRadioButton: 'div[class="gh-publishmenu-radio-button"]'
};

export class pagesPage {

  navigateToPageLink() {
      cy.get(tagLocators.pagesLink).first().click()
      cy.wait(1000)
      cy.screenshot(Cypress.currentTest.title + '-navigateToPageLink')
  }

  clickToNewPageButton() {
    cy.get(tagLocators.newPageButton).first().click()
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-clickToNewPageButton')
  }

  putInputPageTitle() {
    cy.get(tagLocators.inputPageTitle).type('Page test cypress 1')
    cy.screenshot(Cypress.currentTest.title + '-putInputPageTitle')
  }

  putTextAreaPageDescription() {
    cy.get(tagLocators.textAreaPageDescriptionContent).type('Page test descriptioncypress 1', {force:true})
    cy.screenshot(Cypress.currentTest.title + '-putTextAreaPageDescription')
  }

  clickToPublishButton() {
    cy.get(tagLocators.publishButton).first().click()
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-clickToPublishButton')
  }

  clickToContinuePublishButton() {
    cy.get(tagLocators.continuePublishButton).first().click()
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-clickToContinuePublishButton')
  }

  clickToPublisRightNowhButton() {
    cy.get(tagLocators.publishRightNowButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickToPublishRightNowButton')
  }

  clickToBackToEditorButton() {
    cy.get(tagLocators.backToEditorButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickToBackToEditorButton')
  }

  verifyTitleNewPage() {    
    cy.get(tagLocators.pageTitle).first().should('contain', "Page test cypress 1")
    cy.screenshot(Cypress.currentTest.title + '-verifyTitleNewPage')
  }

  clickFirstPage() {
    cy.get(tagLocators.pageItemList).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickFirstPage')
  }

  putInputPageEditedTitle() {
    cy.get(tagLocators.inputPageEditTitle).type(' Edited')
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-putInputPageEditedTitle')
  }

  clickOnUpdatePageButton() {
    cy.get(tagLocators.updateButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnUpdatePageButton')
  }

  clickOnUpdateConfirmPageButton() {
    cy.get(tagLocators.updateConfirmbutton).first().click()
    cy.wait(3000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnUpdateConfirmPageButton')
  }

  verifyTitleEditedPage() {    
    cy.get(tagLocators.pageTitle).first().should('contain', 'Page test cypress 1 Edited')
    cy.screenshot(Cypress.currentTest.title + '-verifyTitleEditedPage')
  }

  clickOnUnpublishPageButton() {  
    cy.get(tagLocators.unpublishRadioButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnUnpublishPageButton')
  }

  clickOnConfirmationUnpublishPageButton() {    
    cy.get(tagLocators.confirmationUnpublishButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnConfirmationUnpublishPageButton')
  }

  verifyStatusUnpublishedPage() {  
    cy.get(tagLocators.pageStatus).first().should('contain', 'Draft')
    cy.screenshot(Cypress.currentTest.title + '-verifyStatusUnpublishedPage')
  }

  clickOnPageSettingButton() {   
    cy.get(tagLocators.pageSettingButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnPageSettingButton')
  }

  clickOnDeletePageButton() {    
    cy.get(tagLocators.deletePageButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnDeletePageButton')
  }

  clickConfirmationDeletePageButton() {    
    cy.get(tagLocators.confirmationDeletePageButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickConfirmationDeletePageButton')
  }

  verifyPageIsNotInList() {
    cy.get(tagLocators.pageTitle).first().should('not.contain', 'Page test cypress 1 Edited')
    cy.screenshot(Cypress.currentTest.title + '-verifyPageIsNotInList')
  }

  clickOnSelectPublishPageModeButton() {
    cy.get(tagLocators.unpublishRadioButton).last().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnSelectPublishPageModeButton')
  }

  selectScheduleForLateOption() {
    cy.get(tagLocators.scheduleForLateButton).last().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-selectScheduleForLateOption')
  }

  selectSetTwoDaysLater() {
    let date = new Date();
    date.setDate(date.getDate() + 2);
    let inputDateElement = cy.get(tagLocators.dateToScheduleInput).first()
    inputDateElement.clear()
    inputDateElement.type(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-selectSetTwoDaysLater')
  }

  clickOnGoBackToPageEditorButton() {
    cy.get(tagLocators.goBackToPageEditorButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnGoBackToPageEditorButton')
  }

  verifyStatusScheduledPage() {
    cy.get(tagLocators.pageScheduledStatus).first().should('contain', 'Scheduled')
    cy.screenshot(Cypress.currentTest.title + '-verifyStatusScheduledPage')
  }

}