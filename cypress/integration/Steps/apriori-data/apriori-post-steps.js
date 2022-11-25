import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {postPage} from "../../../page-objects/post-page";
import { MockarooClient } from "../mockarooClient/mockarooClient";

const mockaroo = new MockarooClient();
let selectedRow;
const postPageObj = new postPage();

Given(/^a priori data should be loaded for post$/, async function() {
    selectedRow = await mockaroo.getDataPoolRandom();
});

And(/^user types a title$/, function() {
    postPageObj.typeTextAreaPostTitle(selectedRow.title);
});

And(/^user types a weird title$/, function() {
    postPageObj.typeTextAreaPostTitle(selectedRow.test_field);
});

And(/^user types a description$/, function() {
    postPageObj.typeTextAreaPostDescription(selectedRow.description);
})

And(/^user types url$/, function() {
    postPageObj.typeUrlInput(selectedRow.url);
})

And(/^user types weird url$/, function() {
    postPageObj.typeUrlInput(selectedRow.test_field);
})

And(/^user types date input$/, function() {
    postPageObj.typeDateInput(selectedRow.date);
})

And(/^user types date input as text$/, function() {
    postPageObj.typeDateInput(selectedRow.name);
})

And(/^user types a weird date input$/, function() {
    postPageObj.typeDateInput(selectedRow.test_field);
})

And(/^user types excerpt input$/, function() {
    postPageObj.typeInputExcerpt(selectedRow.description);
})

And(/^user types a large tag input$/, function() {
    postPageObj.typeTagInput(selectedRow.description);
})

And(/^user types a weird excerpt input$/, function() {
    postPageObj.typeInputExcerpt(selectedRow.test_field);
})

Then(/^verify Draft post is in the post list$/, function() {
    expect(postPageObj.verifyPostTitleOnList(selectedRow.title)).not.to.be.undefined;
})

Then(/^verify Draft weird post is in the post list$/, function() {
    expect(postPageObj.verifyPostTitleOnList(selectedRow.test_field)).not.to.be.undefined;
})

Then(/^verify alert banner$/, function() {
    expect(postPageObj.verifyAlertBanner()).to.be.undefined
})