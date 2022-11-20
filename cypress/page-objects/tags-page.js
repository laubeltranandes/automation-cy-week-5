import GLOBAL_CONST from "../support/globalConst";

const tagLocators = {
    tagLink:"a[href='#/tags/'",
    newTagButton: "a[href='#/tags/new/'",
    inputTagName: "input[id='tag-name']",
    textAreaTagDescription: "textarea[id='tag-description']",
    inputTagColor: "input[placeholder='15171A']",
    buttonTagExpand: "div .gh-expandable-header > button",
    inputTagMetaTitle: "input[id='meta-title']",
    textAreaTagMetaDescription: "textarea[id='meta-description']",
    inputTagCannonicalUrl: "input[id='canonical-url']",
    buttonSaveTag: "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']",
    linkFirstTagList:"a[href='#/tags/tag-test-cypress-1/']",
    buttonLeave:"button[class='gh-btn gh-btn-red']",
    buttonTagDelete: "button[class='gh-btn gh-btn-red gh-btn-icon']",
    buttonTagAcceptModal: "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']",
    buttonTagRejectModal: "button[class='gh-btn']",
    messageError: "span[class='error']",
    tittleTag: "h2[class='gh-canvas-title']",
    tagName: "h3[class='gh-tag-list-name']",
   
  };
  export class tagPage {

    navigateToTagLink() {
        cy.get(tagLocators.tagLink).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-navigateToTagLink')
    }

    clickToNewTagButton() {
        cy.get(tagLocators.newTagButton).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToNewTagButton')
    }

    putInputTagName() {
        cy.get(tagLocators.inputTagName).type('Tag test cypress 1')
        cy.screenshot(Cypress.currentTest.title + '-putInputTagName')
    }

    putTextAreaTagDescription() {
        cy.get(tagLocators.textAreaTagDescription).type('Tag test descriptioncypress 1')
        cy.screenshot(Cypress.currentTest.title + '-putTextAreaTagDescription')
    }

    putInputTagColor() {
        cy.get(tagLocators.inputTagColor).type('bd4747')
        cy.screenshot(Cypress.currentTest.title + '-putInputTagColor')
    }

    clickToButtonTagExpand() {
        cy.get(tagLocators.buttonTagExpand).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonTagExpand')
    }

    putInputTagMetaTitle() {
        cy.get(tagLocators.inputTagMetaTitle).type('Meta tittle cypress 1')
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-putInputTagMetaTitle')
    }

    putTextAreaTagMetaDescription() {
        cy.get(tagLocators.textAreaTagMetaDescription).type('Meta description cypress 2')
        cy.screenshot(Cypress.currentTest.title + '-putTextAreaTagMetaDescription')
    }

    putInputTagCannonicalUrl() {
        cy.get(tagLocators.inputTagCannonicalUrl).type('http://localhost:2369/test')
        cy.screenshot(Cypress.currentTest.title + '-putInputTagCannonicalUrl')
    }

    clickToButtonSaveTag() {
        cy.get(tagLocators.buttonSaveTag).click();
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonSaveTag')
    }

    clickToLinkFirstTagList() {
        cy.get(tagLocators.linkFirstTagList).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToLinkFirstTagList')
    }

    clickToButtonTagDelete() {
        cy.get(tagLocators.buttonTagDelete).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonTagDelete')
    }

    clickToButtonTagAcceptModal() {
        cy.get(tagLocators.buttonTagAcceptModal).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonTagAcceptModal')
    }

    clickToButtonTagRejectModal() {
        cy.get(tagLocators.buttonTagRejectModal).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToButtonTagRejectModal')
    }

    verifyNewTitleTag() {    
        cy.get(tagLocators.tagName).then($items => {
            expect($items.find(item => item.innerText == "Tag test cypress 1"))
        })
    }

    clickToButtonLeaveModal() {
        cy.get(tagLocators.buttonLeave).click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-verifyNewTitleTag')
    }

    verifyTitleTag() {    
        cy.get(tagLocators.tagName).then($items => {
            expect($items.find(item => item.innerText == "Tag Editado test cypress 1"))
        })
    }

    editColorAndTitleItems(){     
         cy.get(tagLocators.inputTagName).clear()
         cy.get(tagLocators.inputTagName).type('Tag Editado test cypress 1');
         cy.get(tagLocators.inputTagColor).clear()
         cy.get(tagLocators.inputTagColor).type('e50b0b')
         cy.wait(1000)
         cy.screenshot(Cypress.currentTest.title + '-editColorAndTitleItems')
    }

    naviageteReturnList(){
        cy.get(tagLocators.tittleTag).then($items => {
            expect($items.find(item => item.innerText == "Tags"))
        })
    }

    messageError() {
        cy.get(tagLocators.messageError).then($items => {
            expect($items.find(item => item.innerText == "You must specify a name for the tag."))
        })
    }
  }