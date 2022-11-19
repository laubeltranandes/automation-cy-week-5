const tagLocators = {
  pagesLink:"a[href='#/pages/']",
  newPageButton: "a[href='#/editor/page/']",
  inputPageTitle: "textarea[class='gh-editor-title ember-text-area gh-input ember-view']",
  textAreaPageDescriptionContent: "div.koenig-editor__editor.__mobiledoc-editor",
  publishButton: "button[class='gh-btn gh-btn-editor darkgrey gh-publish-trigger']",
  continuePublishButton: "button[class='gh-btn gh-btn-black gh-btn-large']",
  publishRightNowButton: "button[class='gh-btn gh-btn-large gh-btn-pulse ember-view']",
  backToEditorButton: "button[class='gh-back-to-editor']",
  pageTitle: "h3[class='gh-content-entry-title']",
  pageStatus: 'p[class="gh-content-entry-status"]',
  pageItemList: "li[class='gh-list-row gh-posts-list-item gh-posts-list-item-labs gh-post-list-plain-status']",
  updateButton: 'button[class="gh-btn gh-btn-editor gh-editor-save-trigger green ember-view"]',
  unpublishButton: 'button[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]',
  confirmationUnpublishButton: 'button[class="gh-revert-to-draft"]',
  pageSettingButton: 'button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]',
  deletePageButton: 'button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]',
  confirmationDeletePageButton: 'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]',
  publishPageModeButton: 'button[class="gh-publish-setting-title "]',
  scheduleForLateButton: 'div .gh-publish-schedule > div',
  dateToScheduleInput: 'div .ember-power-calendar > div:first-child > div:first-child > input',
  goBackToPageEditorButton: 'button[class="gh-btn-editor gh-publish-back-button"]'
};

export class pagesPage {

  navigateToPageLink() {
      cy.get(tagLocators.pagesLink).first().click()
  }

  clickToNewPageButton() {
      cy.get(tagLocators.newPageButton).first().click()
  }

  putInputPageTitle() {
      cy.get(tagLocators.inputPageTitle).type('Page test cypress 1')
  }

  putTextAreaPageDescription() {
      cy.get(tagLocators.textAreaPageDescriptionContent).type('Page test descriptioncypress 1', {force:true})
  }

  clickToPublishButton() {
    cy.get(tagLocators.publishButton).first().click()
  }

  clickToContinuePublishButton() {
    cy.get(tagLocators.continuePublishButton).first().click()
  }

  clickToPublisRightNowhButton() {
    cy.get(tagLocators.publishRightNowButton).first().click()
  }

  clickToBackToEditorButton() {
    cy.get(tagLocators.backToEditorButton).first().click()
  }

  clickGoBackToPagesButton() {
    cy.get(tagLocators.goBackToPagesButton).first().click()
  }

  verifyTitleNewPage() {    
    cy.get(tagLocators.pageTitle).first().should('contain', "Page test cypress 1")
  }

  clickFirstPage() {
    cy.get(tagLocators.pageItemList).first().click()
  }

  putInputPageEditedTitle() {
    cy.get(tagLocators.inputPageTitle).type(' Edited')
  }

  clickOnUpdatePageButton() {
    cy.get(tagLocators.updateButton).first().click()
  }

  verifyTitleEditedPage() {    
    cy.get(tagLocators.pageTitle).first().should('contain', 'Page test cypress 1 Edited')
  }

  clickOnUnpublishPageButton() {    
    cy.get(tagLocators.unpublishButton).first().click()
  }

  clickOnConfirmationUnpublishPageButton() {    
    cy.get(tagLocators.confirmationUnpublishButton).first().click()
    cy.wait(1000);
  }

  verifyStatusUnpublishedPage() {    
    cy.get(tagLocators.pageStatus).first().should('contain', 'Draft')
  }

  clickOnPageSettingButton() {    
    cy.get(tagLocators.pageSettingButton).first().click()
  }

  clickOnDeletePageButton() {    
    cy.get(tagLocators.deletePageButton).first().click()
  }

  clickConfirmationDeletePageButton() {    
    cy.get(tagLocators.confirmationDeletePageButton).first().click()
  }

  verifyPageIsNotInList() {
    cy.get(tagLocators.pageTitle).first().should('not.contain', 'Page test cypress 1 Edited')
  }

  clickOnSelectPublishPageModeButton() {
    cy.get(tagLocators.publishPageModeButton).first().click()
  }

  selectScheduleForLateOption() {
    cy.get(tagLocators.scheduleForLateButton).last().click()
  }

  selectSetTwoDaysLater() {
    let date = new Date();
    date.setDate(date.getDate() + 2);
    cy.get(tagLocators.dateToScheduleInput).clear()
    cy.get(tagLocators.dateToScheduleInput).type(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
  }

  clickOnGoBackToPageEditorButton() {
    cy.get(tagLocators.goBackToPageEditorButton).first().click()
  }

  verifyStatusScheduledPage() {    
    cy.get(tagLocators.pageStatus).first().should('contain', 'Scheduled')
  }

}