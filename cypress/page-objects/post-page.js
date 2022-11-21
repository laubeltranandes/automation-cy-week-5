const tagLocators = {
    postLink:"a[href='#/posts/'",
    newPostButton: "a[href='#/editor/post/'",
    textAreaPostTitle: "textarea[placeholder='Post Title']",
    textAreaPostDescriptionClick: "div[data-placeholder='Begin writing your post...']",
    textAreaPostDescription: "div[data-placeholder='Begin writing your post...']",
    buttonPostPublish: 'div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]',
    buttonContinuePublish: 'button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]',
    buttonHeaderEditor: "header.gh-publish-header > button.gh-btn-editor",
    buttonPosts: "a[href='#/posts/']",
    titleTagInsideList: 'h3[class="gh-content-entry-title"]',
    buttonRightNow: "div.gh-publish-setting.last > button",
    buttonScheduledForLater: 'div[class="gh-publishmenu-radio-button"]',
    buttonDrafts: "a[href='#/posts/?type=draft']",
    buttonPublished: "a[href='#/posts/?type=published']",
    buttonEditFirstItem: 'li[class="gh-list-row gh-posts-list-item"]',
    buttonEditMenu: "button[title='Settings']",
    buttonDeleteDraftPost: 'button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]',
    buttonConfirmDeleteDraftPost: 'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]',
    h3PublishedItem: "div.gh-tabs-analytics > div.tab-list > button.tab.tab-selected:first-child > h3"
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

    typeTextAreaPostDescription(text) {
        cy.get(tagLocators.textAreaPostDescription).type(text, {force: true})
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-typeTextAreaPostDescription')
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
        cy.get(tagLocators.buttonScheduledForLater).last().click()
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
        cy.get(tagLocators.buttonEditFirstItem).first().click()
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
        cy.get(tagLocators.titleTagInsideList).first().should('contain', text)
        cy.screenshot(Cypress.currentTest.title + '-verifyPostTitleOnList')
    }

    verifyPostTitleNotOnList(text) {
        cy.get(tagLocators.titleTagInsideList).first().should('not.contain', text)
        cy.screenshot(Cypress.currentTest.title + '-verifyPostTitleNotOnList')
    }

    verifyH3ContainsText() { 
        return cy.get(tagLocators.h3PublishedItem).then(($h3) => {
            return $h3[0].innerText
        })
    }
  }