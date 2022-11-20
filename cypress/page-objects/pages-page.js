import GLOBAL_CONST from "../support/globalConst";

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
      cy.wait(1000)
      cy.screenshot(GLOBAL_CONST.pages + '-navigateToPageLink')
  }

  clickToNewPageButton() {
    cy.screenshot('pages_list')
    cy.get(tagLocators.newPageButton).first().click()
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.pages + '-clickToNewPageButton')
  }

  putInputPageTitle() {
    cy.screenshot('pages_editor_before_create')
    cy.get(tagLocators.inputPageTitle).type('Page test cypress 1')
    cy.screenshot(GLOBAL_CONST.pages + '-putInputPageTitle')
  }

  putTextAreaPageDescription() {
    cy.get(tagLocators.textAreaPageDescriptionContent).type('Page test descriptioncypress 1', {force:true})
    cy.screenshot(GLOBAL_CONST.pages + '-putTextAreaPageDescription')
  }

  clickToPublishButton() {
    cy.screenshot('added_page_title_and_content')
    cy.get(tagLocators.publishButton).first().click()
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.pages + '-clickToPublishButton')
  }

  clickToContinuePublishButton() {
    cy.screenshot('publish_confirmation_screen')
    cy.get(tagLocators.continuePublishButton).first().click()
    cy.wait(1000)
    cy.screenshot(GLOBAL_CONST.pages + '-clickToContinuePublishButton')
  }

  clickToPublishRightNowButton() {
    cy.get(tagLocators.publishRightNowButton).first().click().screenshot('publish_right_now_screen')
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickToPublishRightNowButton')
  }

  clickToBackToEditorButton() {
    cy.screenshot('confirmed_publishing')
    cy.get(tagLocators.backToEditorButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickToBackToEditorButton')
  }

  verifyTitleNewPage() {    
    cy.screenshot('pages_list_after_create')
    cy.get(tagLocators.pageTitle).first().should('contain', "Page test cypress 1")
    cy.screenshot(GLOBAL_CONST.pages + '-verifyTitleNewPage')
  }

  clickFirstPage() {
    cy.screenshot('pages_list_to_select')
    cy.get(tagLocators.pageItemList).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickFirstPage')
  }

  putInputPageEditedTitle() {
    cy.screenshot('page_editor_before_edit')
    cy.get(tagLocators.inputPageTitle).type(' Edited')
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-putInputPageEditedTitle')
  }

  clickOnUpdatePageButton() {
    cy.screenshot('page_editor_after_edit')
    cy.get(tagLocators.updateButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickOnUpdatePageButton')
  }

  verifyTitleEditedPage() {    
    cy.screenshot('pages_list_after_edit')
    cy.get(tagLocators.pageTitle).first().should('contain', 'Page test cypress 1 Edited')
    cy.screenshot(GLOBAL_CONST.pages + '-verifyTitleEditedPage')
  }

  clickOnUnpublishPageButton() {  
    cy.screenshot('page_editor_before_unpublish')  
    cy.get(tagLocators.unpublishButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickOnUnpublishPageButton')
  }

  clickOnConfirmationUnpublishPageButton() {    
    cy.screenshot('page_unpublish_confirmation_screen') 
    cy.get(tagLocators.confirmationUnpublishButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickOnConfirmationUnpublishPageButton')
  }

  verifyStatusUnpublishedPage() {  
    cy.screenshot('pages_list_after_unpublish')   
    cy.get(tagLocators.pageStatus).first().should('contain', 'Draft')
    cy.screenshot(GLOBAL_CONST.pages + '-verifyStatusUnpublishedPage')
  }

  clickOnPageSettingButton() {   
    cy.screenshot('page_editor_before_delete') 
    cy.get(tagLocators.pageSettingButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickOnPageSettingButton')
  }

  clickOnDeletePageButton() {    
    cy.screenshot('page_delete_click')
    cy.get(tagLocators.deletePageButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickOnDeletePageButton')
  }

  clickConfirmationDeletePageButton() {    
    cy.screenshot('page_delete_confirmation')
    cy.get(tagLocators.confirmationDeletePageButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickConfirmationDeletePageButton')
  }

  verifyPageIsNotInList() {
    cy.screenshot('pages_list_after_delete')
    cy.get(tagLocators.pageTitle).first().should('not.contain', 'Page test cypress 1 Edited')
    cy.screenshot(GLOBAL_CONST.pages + '-verifyPageIsNotInList')
  }

  clickOnSelectPublishPageModeButton() {
    cy.screenshot('open_page_publishing_options')
    cy.get(tagLocators.publishPageModeButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickOnSelectPublishPageModeButton')
  }

  selectScheduleForLateOption() {
    cy.screenshot('select_schedule_page_publish_for_late_option')
    cy.get(tagLocators.scheduleForLateButton).last().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-selectScheduleForLateOption')
  }

  selectSetTwoDaysLater() {
    cy.screenshot('enabled_date_picker_to_schedule_page_publish')
    let date = new Date();
    date.setDate(date.getDate() + 2);
    cy.get(tagLocators.dateToScheduleInput).clear()
    cy.get(tagLocators.dateToScheduleInput).type(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-selectSetTwoDaysLater')
  }

  clickOnGoBackToPageEditorButton() {
    cy.screenshot('page_scheduling_finished')
    cy.get(tagLocators.goBackToPageEditorButton).first().click()
    cy.wait(1000);
    cy.screenshot(GLOBAL_CONST.pages + '-clickOnGoBackToPageEditorButton')
  }

  verifyStatusScheduledPage() {
    cy.screenshot('pages_list_after_sheduling')
    cy.get(tagLocators.pageStatus).first().should('contain', 'Scheduled')
    cy.screenshot(GLOBAL_CONST.pages + '-verifyStatusScheduledPage')
  }

}