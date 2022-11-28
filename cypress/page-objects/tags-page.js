const tagLocators = {
    tagLink:"a[href='#/tags/'",
    newTagButton: "a[href='#/tags/new/'",
    inputTagName: "input[id='tag-name']",
    inputTagSlug: "input[id='tag-slug']",
    textAreaTagDescription: "textarea[id='tag-description']",
    inputTagColor: "input[placeholder='15171A']",
    buttonTagExpand: "div .gh-expandable-header > button",
    inputTagMetaTitle: "input[id='meta-title']",
    textAreaTagMetaDescription: "textarea[id='meta-description']",
    inputTagCannonicalUrl: "input[id='canonical-url']",
    buttonSaveTag: "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']",
    linkFirstTagList:"li[class='ember-view gh-list-data gh-tag-list-title gh-list-cellwidth-70']",
    buttonLeave:"button[class='gh-btn gh-btn-red']",
    buttonTagDelete: "button[class='gh-btn gh-btn-red gh-btn-icon']",
    buttonTagAcceptModal: "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']",
    buttonTagRejectModal: "button[class='gh-btn']",
    messageError: "span[class='error']",
    tittleTag: "h2[class='gh-canvas-title']",
    tagName: "h3[class='gh-tag-list-name']",
    titleTagInsideList: "ol.tags-list gh-list  > li.gh-list-row gh-tags-list-item:first-child > a.ember-view:first-child > h3.gh-tag-list-name",
    buttonInternal: "button[class='gh-btn ']"
  };
  export class tagPage {

    navigateToTagLink() {
        cy.get(tagLocators.tagLink).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-navigateToTagLink')
        cy.screenshot('navigate_to_tags_link')
    }

    clickToNewTagButton() {
        cy.get(tagLocators.newTagButton).first().click()
        cy.wait(1000)
        cy.screenshot(Cypress.currentTest.title + '-clickToNewTagButton')
        cy.screenshot('tag_new_tag_button_clicked')
    }

    putInputTagName() {
        cy.get(tagLocators.inputTagName).type('Tag test cypress 1')
        cy.screenshot(Cypress.currentTest.title + '-putInputTagName')
    }

    typeTagTitle(text) {
        cy.get(tagLocators.inputTagName).type(text)
    }
    typeColor(text) {
        cy.get(tagLocators.inputTagColor).type(text)
    }

    putTextAreaTagDescription() {
        cy.get(tagLocators.textAreaTagDescription).type('Tag test descriptioncypress 1')
        cy.screenshot(Cypress.currentTest.title + '-putTextAreaTagDescription')
    }

    inputAreaTagDescription(text) {
        cy.get(tagLocators.textAreaTagDescription).type(text)
    }

    inputSlug(text) {
        cy.get(tagLocators.inputTagSlug).type(text)
    }

    inputTagMetaTitle(text) {
        cy.get(tagLocators.inputTagMetaTitle).type(text)
    }

    inputTagCanonicalUrl(text) {
        cy.get(tagLocators.inputTagCannonicalUrl).type(text)
    }
    inputTagMetaDescription(text) {
        cy.get(tagLocators.textAreaTagMetaDescription).type(text)
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
        cy.screenshot('tag_settings_added')
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

    clickToInternalTag() {
        cy.get(tagLocators.buttonInternal).click();
        cy.wait(1000)        
    }


    clickToLinkFirstTagList() {
        cy.get(tagLocators.tagName).first().click()
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

    messageColorError(text) {
        cy.get(tagLocators.messageError).then($items => {
            expect($items.find(item => item.innerText == text))
        })
    }

    verifyTagTitleOnList(text) { 
        return cy.get(tagLocators.tagName).then(($items) => {
            return $items.find(item => item.innerText == text)
        })
    }   
  }