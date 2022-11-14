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
    }

    clickToNewTagButton() {
        cy.get(tagLocators.newTagButton).first().click()
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
    }

    putInputTagMetaTitle() {
        cy.get(tagLocators.inputTagMetaTitle).type('Meta tittle cypress 1')
    }

    putTextAreaTagMetaDescription() {
        cy.get(tagLocators.textAreaTagMetaDescription).type('Meta description cypress 2')
    }

    putInputTagCannonicalUrl() {
        cy.get(tagLocators.inputTagCannonicalUrl).type('http://localhost:2369/test')
    }

    clickToButtonSaveTag() {
        cy.get(tagLocators.buttonSaveTag).click();  
    }

    clickToLinkFirstTagList() {
        cy.get(tagLocators.linkFirstTagList).first().click()
    }

    clickToButtonTagDelete() {
        cy.get(tagLocators.buttonTagDelete).click()
    }

    clickToButtonTagAcceptModal() {
        cy.get(tagLocators.buttonTagAcceptModal).click()
    }

    clickToButtonTagRejectModal() {
        cy.get(tagLocators.buttonTagRejectModal).click()
    }

    verifyTitleTag() {    
        cy.get(tagLocators.tagName).then($items => {
            expect($items.find(item => item.innerText == "Tag test cypress 1"))
        })
      }
    clickToButtonLeaveModal() {
        cy.get(tagLocators.buttonLeave).click()
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