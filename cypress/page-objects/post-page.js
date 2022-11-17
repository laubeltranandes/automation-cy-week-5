const tagLocators = {
    postLink:"a[href='#/posts/'",
    newPostButton: "a[href='#/editor/post/'",
    textAreaPostTitle: "textarea[placeholder='Post title']",
    textAreaPostDescriptionClick: "div[data-placeholder='Begin writing your post...']",
    textAreaPostDescription: "div[data-placeholder='Begin writing your post...'] > p",
    buttonPostPublish: ".gh-publish-trigger span",
    buttonContinuePublish: "div.gh-publish-cta > button.gh-btn",
    buttonHeaderEditor: "header.gh-publish-header > button.gh-btn-editor",
    buttonPosts: "a[href='#/posts/']",
    titleTagInsideList: ".gh-posts-list-item-labs .gh-content-entry-title",
    buttonRightNow: "div.gh-publish-setting.last > button",
    buttonScheduledForLater: "div .gh-publish-schedule .gh-radio:nth-child(2)",
    buttonDrafts: "a[href='#/posts/?type=draft']",
    buttonPublished: "a[href='#/posts/?type=published']",
    buttonEditFirstItem: "ol.posts-list.gh-list.feature-memberAttribution > li.gh-list-row.gh-posts-list-item.gh-posts-list-item-labs.gh-post-list-plain-status:first-child > a.ember-view.permalink.gh-list-data.gh-post-list-button",
    buttonEditMenu: "button[title='Settings']",
    buttonDeleteDraftPost: "button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button",
    buttonConfirmDeleteDraftPost: "div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon.ember-view",
    h3PublishedItem: "div.gh-tabs-analytics > div.tab-list > button.tab.tab-selected:first-child > h3"
  };
  export class postPage {

    navigateToPostLink() {
        cy.get(tagLocators.postLink).first().click()
    }

    clickToNewPostButton() {
        cy.get(tagLocators.newPostButton).first().click()
    }

    typeTextAreaPostTitle(text) {
        cy.get(tagLocators.textAreaPostTitle).type(text)
    }

    clickTextAreaPostTitle() {
        cy.get(tagLocators.textAreaPostDescriptionClick).click()
        cy.wait(2000)
    }

    typeTextAreaPostDescription(text) {
        cy.get(tagLocators.textAreaPostDescription).type(text, {force: true})
    }

    clickToButtonPostPublish() {
        cy.get(tagLocators.buttonPostPublish).click()
    }

    clickToButtonContinuePublish() {
        cy.get(tagLocators.buttonContinuePublish).first().click()
    }

    clickToButtonHeaderEditor() {
        cy.get(tagLocators.buttonHeaderEditor).click()
    }

    clickToButtonPosts() {
        cy.get(tagLocators.buttonPosts).first().click()
    }

    clickToButtonRightNow() {
        cy.get(tagLocators.buttonRightNow).first().click()
    }

    clickToButtonScheduledForLater() {
        cy.get(tagLocators.buttonScheduledForLater).click()
    }

    clickToButtonDrafts() {
        cy.get(tagLocators.buttonDrafts).click()
    }

    clickToButtonPublished() {
        cy.get(tagLocators.buttonPublished).click()
    }

    clickToButtonEditFirstItem() {
        cy.get(tagLocators.buttonEditFirstItem).click()
    }

    clickToButtonEditMenu() {
        cy.get(tagLocators.buttonEditMenu).click()
    }

    clickToButtonDeleteDraftPost() {
        cy.get(tagLocators.buttonDeleteDraftPost).click()
    }

    clickToButtonConfirmDeleteDraftPost() {
        cy.get(tagLocators.buttonConfirmDeleteDraftPost).click()
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
  }