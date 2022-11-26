const tagLocators = {
    postLink:"a[href='#/posts/'",
    newPostButton: "a[href='#/editor/post/'",
    textAreaPostTitle: "textarea[placeholder='Post title']",
    textAreaPostDescriptionClick: "div[data-placeholder='Begin writing your post...']",
    textAreaPostDescription: "div[data-placeholder='Begin writing your post...'] > p",
    buttonPostPublish: ".gh-publish-trigger span",
    buttonGoogleMetadata: "ul.nav-list.nav-list-block > li.nav-list-item:first-child > button",
    buttonContinuePublish: "div.gh-publish-cta > button.gh-btn",
    buttonHeaderEditor: "header.gh-publish-header > button.gh-btn-editor",
    buttonPosts: "a[href='#/posts/']",
    titleTagInsideList: "ol.posts-list > li.gh-list-row:first-child > a.ember-view:first-child > h3.gh-content-entry-title",
    buttonRightNow: "div.gh-publish-setting.last > button",
    buttonScheduledForLater: "div .gh-publish-schedule .gh-radio:nth-child(2)",
    buttonDrafts: "a[href='#/posts/?type=draft']",
    buttonPublished: "a[href='#/posts/?type=published']",
    buttonEditFirstItem: "ol.posts-list.gh-list.feature-memberAttribution > li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:first-child > a.ember-view.permalink.gh-list-data.gh-post-list-button",
    buttonEditMenu: "button[title='Settings']",
    buttonDeleteDraftPost: "button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button",
    buttonConfirmDeleteDraftPost: "div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon.ember-view",
    h3PublishedItem: "div.gh-tabs-analytics > div.tab-list > button.tab.tab-selected:first-child > h3",
    urlInput: "input#url",
    alertBanner: "div.gh-alert-content",
    dateInput: "input[placeholder='YYYY-MM-DD']",
    hourInput: "div.gh-date-time-picker > div.gh-date-time-picker-time > input",
    inputExcerpt: "textarea#custom-excerpt",
    inputTag: "input.ember-power-select-trigger-multiple-input",
    inputGoogleMetadataTitle: "input#meta-title",
    inputGoogleMetadataDescription: "textarea#meta-description",
    inputGoogleMetadataUrl: "input.post-setting-canonicalUrl.ember-text-field",
    errorText: "div.gh-date-time-picker > div.gh-date-time-picker-error",
    divItemGoogleMetadata: "form[aria-label='Meta data settings'] > div.form-group:nth-child($divPosition)",
    helperTextForGoogleMetadataTitle: "form[aria-label='Meta data settings'] > div.form-group:first-child > p",
    helperTextForGoogleMetadataDescription: "form[aria-label='Meta data settings'] > div.form-group:nth-child(2) > p",
    helperTextForGoogleMetadataUrl: "form[aria-label='Meta data settings'] > div.form-group:nth-child(3) > p",
    titlePublishingPage: "div.gh-publish-title > div.green"
  };
  export class postPage {

    navigateToPostLink() {
        cy.get(tagLocators.postLink).first().click()
        cy.wait(1000)
        cy.screenshot('navigate_to_post_page')
    }

    clickToNewPostButton() {
        cy.get(tagLocators.newPostButton).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToNewPostButton')
    }

    typeTextAreaPostTitle(text) {
        cy.get(tagLocators.textAreaPostTitle).type(text)
        cy.screenshot(Cypress.currentTest.title+ '-typeTextAreaPostTitle')
    }

    clickTextAreaPostTitle() {
        cy.get(tagLocators.textAreaPostDescriptionClick).click()
        cy.screenshot(Cypress.currentTest.title + '-clickTextAreaPostTitle')
    }

    clickTextAreaMetadataGoogleDescription() {
        cy.get(tagLocators.inputGoogleMetadataDescription).click()
        cy.screenshot(Cypress.currentTest.title + '-clickTextAreaMetadataGoogleDescription')
    }

    typeTextAreaPostDescription(text) {
        cy.get(tagLocators.textAreaPostDescription).innerText = text
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeTextAreaPostDescription')
    }

    typeUrlInput(text) {
        cy.get(tagLocators.urlInput).clear()
        cy.get(tagLocators.urlInput).type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeUrlInput')
    }

    typeDateInput(text) {
        cy.get(tagLocators.dateInput).clear()
        cy.get(tagLocators.dateInput).type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeDateInput')
    }

    typeHourInput(text) {
        cy.get(tagLocators.hourInput).clear()
        cy.get(tagLocators.hourInput).type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeHourInput')
    }

    typeInputExcerpt(text) {
        cy.get(tagLocators.inputExcerpt).clear()
        cy.get(tagLocators.inputExcerpt).type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeInputExcerpt')
    }

    typeTagInput(text) {
        cy.get(tagLocators.inputTag).first().clear()
        cy.get(tagLocators.inputTag).first().type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeTagInput')
    }

    typeGoogleMetadataTitle(text) {
        cy.get(tagLocators.inputGoogleMetadataTitle).clear()
        cy.get(tagLocators.inputGoogleMetadataTitle).type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeGoogleMetadataTitle')
    }

    typeGoogleMetadataDescription(text) {
        cy.get(tagLocators.inputGoogleMetadataDescription).clear()
        cy.get(tagLocators.inputGoogleMetadataDescription).type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeGoogleMetadataDescription')
    }

    typeGoogleMetadataUrl(text) {
        console.log(typeof text)
        cy.get(tagLocators.inputGoogleMetadataUrl).clear()
        cy.get(tagLocators.inputGoogleMetadataUrl).type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeGoogleMetadataUrl')
    }

    clickToGoogleMetadataOption(){
        cy.get(tagLocators.buttonGoogleMetadata).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToGoogleMetadataOption')
    }

    clickToButtonPostPublish() {
        cy.get(tagLocators.buttonPostPublish).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonPostPublish')
    }

    clickToButtonContinuePublish() {
        cy.get(tagLocators.buttonContinuePublish).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonContinuePublish')
    }

    clickToButtonHeaderEditor() {
        cy.get(tagLocators.buttonHeaderEditor).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonHeaderEditor')
    }

    clickToButtonPosts() {
        cy.get(tagLocators.buttonPosts).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonPosts')
    }

    clickToButtonRightNow() {
        cy.get(tagLocators.buttonRightNow).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonRightNow')
    }

    clickToButtonScheduledForLater() {
        cy.get(tagLocators.buttonScheduledForLater).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonScheduledForLater')
    }

    clickToButtonDrafts() {
        cy.get(tagLocators.buttonDrafts).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonDrafts')
    }

    clickToButtonPublished() {
        cy.get(tagLocators.buttonPublished).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonPublished')
    }

    clickToButtonEditFirstItem() {
        cy.get(tagLocators.buttonEditFirstItem).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonEditFirstItem')
    }

    clickToButtonEditMenu() {
        cy.get(tagLocators.buttonEditMenu).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonEditMenu')
    }

    clickToButtonDeleteDraftPost() {
        cy.get(tagLocators.buttonDeleteDraftPost).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonDeleteDraftPost')
    }

    clickToButtonConfirmDeleteDraftPost() {
        cy.get(tagLocators.buttonConfirmDeleteDraftPost).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonConfirmDeleteDraftPost')
    }

    verifyPostTitleOnList(text) { 
        return cy.get(tagLocators.titleTagInsideList).then(($items) => {
            return $items.find(item => item.innerText == text)
        })
    }

    verifyH3ContainsText() { 
        return cy.get(tagLocators.h3PublishedItem).then(($h3) => {
            return $h3[0].innerText
        })
    }

    verifyAlertBanner() {
        return cy.get(tagLocators.alertBanner).innerText
    }

    verifyErrorText() {
        return cy.get(tagLocators.errorText).innerText
    }

    verifyDivInputGoogleMetadata(divPosition){
        return cy.get(tagLocators.divItemGoogleMetadata.replace('$divPosition', divPosition))
    }

    verifyHelperTextForMetadataGoogleTitle() {
        return cy.get(tagLocators.helperTextForGoogleMetadataTitle)
    }

    verifyHelperTextForMetadataGoogleDescription() {
        return cy.get(tagLocators.helperTextForGoogleMetadataDescription)
    }

    verifyHelperTextForMetadataGoogleUrl() {
        return cy.get(tagLocators.helperTextForGoogleMetadataUrl)
    }

    verifyTitlePublishingPage(){
        return cy.get(tagLocators.titlePublishingPage)
    }
  }