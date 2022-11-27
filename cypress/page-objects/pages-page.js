const tagLocators = {
  pagesLink:"a[href='#/pages/']",
  pagesListLink:'a[class="ember-view gh-btn-editor gh-editor-back-button"]',
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
  goBackToPageEditorButton: 'button[class="gh-btn-editor gh-publish-back-button"]',
  optionFilterRecentlyUpdated: 'li[data-option-index="2"]',
  optionListFilterOrderBy: 'span[class="ember-power-select-selected-item"]'
};

export class pagesPage {

  verifyErrorMaxTitleCharactersIsShown() {
    cy.get('div[class="gh-alert-content"]').should('contain', 'cannot be longer than')
  }
  selectRecentlyUpdatedOptionFilter() {
    cy.get(tagLocators.optionFilterRecentlyUpdated).last().click()
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-selectRecentlyUpdatedOptionFilter')
  }

  clickOnOrderFilter() {
    cy.get(tagLocators.optionListFilterOrderBy).last().click()
    cy.wait(1000)
    cy.screenshot(Cypress.currentTest.title + '-clickOnOrderFilter')
  }

  verifyTitleDraftPage(text) {    
    cy.get(tagLocators.pageTitle).first().should('contain', text)
    cy.screenshot(Cypress.currentTest.title + '-verifyTitleDraftPage')
  }

  putInputParamOnPageTitle(text) {
    cy.get(tagLocators.inputPageTitle).type(text)
    cy.wait(3000)
    cy.screenshot(Cypress.currentTest.title + '-putInputParamOnPageTitle')
  }

  clearTitleText() {
    cy.get(tagLocators.inputPageTitle).first().clear()
    cy.screenshot(Cypress.currentTest.title + '-clearTitleText')
  }

  selectFirstPageOnList() {
    cy.get(tagLocators.pageTitle).first().click()
    cy.wait(2000)
    cy.screenshot(Cypress.currentTest.title + '-clearTitleText')
  }

  returnToPageList() {
    cy.get(tagLocators.pagesListLink).first().click()
    cy.wait(3000)
    cy.screenshot(Cypress.currentTest.title + '-returnToPageList')
  }

  clickToAddImageButton(){
    cy.get('button[class="gh-editor-feature-image-unsplash"]').first().click()
    cy.wait(3000)
    cy.screenshot(Cypress.currentTest.title + '-clickToAddImageButton')
  }

  selectFirstImageListed(){
    cy.get('a[class="gh-unsplash-button"]').first().click()
    cy.wait(3000)
    cy.screenshot(Cypress.currentTest.title + '-selectFirstImageListed')
  }

  clickAltButtonToDescribeImage(){
    cy.get('button[class="h-100 pl1 pr1 ba br3 f8 sans-serif fw4 lh-title tracked-2 bg-white b--midlightgrey midlightgrey"]').first().click()
    cy.screenshot(Cypress.currentTest.title + '-clickAltButtonToDescribeImage')
  }

  putTextIntoAltField(text) {
    cy.get('input[placeholder="Add alt text to the feature image"]').first().type(text)
    cy.screenshot(Cypress.currentTest.title + '-putTextIntoAltField')
  }
  
  navigateToPageLink() {
      cy.get(tagLocators.pagesLink).first().click()
      cy.wait(3000)
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

  clickTextAreaPageDescription() {
    cy.get(tagLocators.textAreaPageDescriptionContent).first().click()
    cy.screenshot(Cypress.currentTest.title + '-clickTextAreaPageDescription')
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
    cy.get(tagLocators.publishRightNowButton).first().click().screenshot('publish_right_now_screen')
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
    cy.get(tagLocators.inputPageTitle).type(' Edited')
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-putInputPageEditedTitle')
  }

  clickOnUpdatePageButton() {
    cy.get(tagLocators.updateButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnUpdatePageButton')
  }

  verifyTitleEditedPage() {    
    cy.get(tagLocators.pageTitle).first().should('contain', 'Page test cypress 1 Edited')
    cy.screenshot(Cypress.currentTest.title + '-verifyTitleEditedPage')
  }

  clickOnUnpublishPageButton() {  
    cy.get(tagLocators.unpublishButton).first().click()
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
    cy.get(tagLocators.publishPageModeButton).first().click()
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
    cy.get(tagLocators.dateToScheduleInput).clear()
    cy.get(tagLocators.dateToScheduleInput).type(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-selectSetTwoDaysLater')
  }

  clickOnGoBackToPageEditorButton() {
    cy.get(tagLocators.goBackToPageEditorButton).first().click()
    cy.wait(1000);
    cy.screenshot(Cypress.currentTest.title + '-clickOnGoBackToPageEditorButton')
  }

  verifyStatusScheduledPage() {
    cy.get(tagLocators.pageStatus).first().should('contain', 'Scheduled')
    cy.screenshot(Cypress.currentTest.title + '-verifyStatusScheduledPage')
  }

}