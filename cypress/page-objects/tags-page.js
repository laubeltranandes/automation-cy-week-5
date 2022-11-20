const tagLocators = {
    tagLink:"a[href='#/tags/'",
    newTagButton: "a[href='#/tags/new/'",
    inputTagName: "input[id='tag-name']",
    textAreaTagDescription: "textarea[id='tag-description']",
    inputTagColor: "input[name='accent-color']",
    buttonTagExpand: "button[class='gh-btn']",
    inputTagMetaTitle: "input[id='meta-title']",
    textAreaTagMetaDescription: "textarea[id='meta-description']",
    inputTagCannonicalUrl: "input[id='canonical-url']",
    buttonSaveTag: "button[class='gh-btn gh-btn-blue gh-btn-icon ember-view']",
    linkFirstTagList:"a[href='#/tags/tag-test-cypress-1/']",
    buttonLeave:"button[class='gh-btn gh-btn-red']",
    buttonTagDelete: "button[class='gh-btn gh-btn-red gh-btn-icon mb15']",
    buttonTagAcceptModal: "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']",
    buttonTagRejectModal: "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']",
    messageError: "span[class='error']",
    tittleTag: "h2[class='gh-canvas-title']",
    tagName: "h3[class='gh-tag-list-name']",
   
  };
  export class tagPage {

    navigateToTagLink() {
        cy.get(tagLocators.tagLink).first().click()
        cy.wait(1000)
        cy.screenshot('navigate_to_tags_link')
    }

    clickToNewTagButton() {
        cy.get(tagLocators.newTagButton).first().click()
        cy.wait(1000)
        cy.screenshot('tag_new_tag_button_clicked')
    }

    putInputTagName() {
        cy.get(tagLocators.inputTagName).type('Tag test cypress 1')
    }

    putTextAreaTagDescription() {
        cy.get(tagLocators.textAreaTagDescription).type('Tag test descriptioncypress 1')
    }

    putInputTagColor() {
        cy.get(tagLocators.inputTagColor).type('bd4747')
    }

    clickToButtonTagExpand() {
        cy.get(tagLocators.buttonTagExpand).first().click()
        cy.wait(1000)
        cy.screenshot('tag_expand_button_clicked')
    }

    putInputTagMetaTitle() {
        cy.get(tagLocators.inputTagMetaTitle).type('Meta tittle cypress 1')
        cy.wait(1000)
        cy.screenshot('tag_settings_added')
    }

    putTextAreaTagMetaDescription() {
        cy.get(tagLocators.textAreaTagMetaDescription).type('Meta description cypress 2')
    }

    putInputTagCannonicalUrl() {
        cy.get(tagLocators.inputTagCannonicalUrl).type('http://localhost:2369/test')
    }

    clickToButtonSaveTag() {
        cy.get(tagLocators.buttonSaveTag).click();
        cy.wait(1000)
        cy.screenshot('tag_save_button_clicked')
    }

    clickToLinkFirstTagList() {
        cy.get(tagLocators.linkFirstTagList).first().click()
        cy.wait(1000)
        cy.screenshot('tag_link_first_on_list_clicked')
    }

    clickToButtonTagDelete() {
        cy.get(tagLocators.buttonTagDelete).click()
        cy.wait(1000)
        cy.screenshot('tag_delete_button_clicked')
    }

    clickToButtonTagAcceptModal() {
        cy.get(tagLocators.buttonTagAcceptModal).click()
        cy.wait(1000)
        cy.screenshot('tag_accept_modal_button_clicked')
    }

    clickToButtonTagRejectModal() {
        cy.get(tagLocators.buttonTagRejectModal).first().click()
        cy.wait(1000)
        cy.screenshot('tag_reject_modal_button_clicked')
    }

    verifyNewTitleTag() {    
        cy.get(tagLocators.tagName).then($items => {
            expect($items.find(item => item.innerText == "Tag test cypress 1"))
        })
    }

    clickToButtonLeaveModal() {
        cy.get(tagLocators.buttonLeave).click()
        cy.wait(1000)
        cy.screenshot('tag_leave_modal_button_clicked')
    }

    verifyTitleTag() {    
        cy.get(tagLocators.tagName).then($items => {
            expect($items.find(item => item.innerText == "Tag Editado test cypress 1"))
        })
    }

    editColorAndTitleItems(){     
         cy.get(tagLocators.inputTagName).clear()
         cy.get(tagLocators.inputTagName).type('Tag Editado test cypress 1', {force: true}) ;
         cy.get(tagLocators.inputTagColor).clear()
         cy.get(tagLocators.inputTagColor).type('e50b0b', {force: true})
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