import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {postPage} from "../../../page-objects/post-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

const mockaroo = new MockarooClient();
let selectedRow;
const postPageObj = new postPage();

Given(/^a priori data pseudo aletorio should be loaded for post$/, async function() {
    selectedRow = await mockaroo.getDataPoolFromAPI();
});

And(/^user types a title for apriori pseudo post step$/, function() {
    postPageObj.typeTextAreaPostTitle(selectedRow.title);
});

And(/^user types url for apriori pseudo post step$/, function() {
    postPageObj.typeUrlInput(selectedRow.url);
});

And(/^user types a weird url for apriori pseudo post step$/, function() {
    postPageObj.typeUrlInput(selectedRow.test_field);
})

And(/^user types a text into date input$/, function() {
    postPageObj.typeDateInput(selectedRow.title);
})

And(/^user types a weird text into date input$/, function() {
    postPageObj.typeDateInput(selectedRow.test_field);
})

And(/^user types a proper date into date input$/, function() {
    postPageObj.typeDateInput(selectedRow.date);
})

And(/^user types a text into hour type$/, function() {
    postPageObj.typeHourInput(selectedRow.title);
})

And(/^user types a date into hour type$/, function() {
    postPageObj.typeHourInput(selectedRow.date);
})

And(/^user types a large tag input for apriori pseudo post step$/, function() {
    postPageObj.typeTagInput(selectedRow.description);
})

And(/^user types a weird tag input for apriori pseudo post step$/, function() {
    postPageObj.typeTagInput(selectedRow.test_field);
})

Then(/^verify Scheduled post is in the post list using apriori pseudo post steps$/, function() {
    expect(postPageObj.verifyPostTitleOnList(selectedRow.title)).not.to.be.undefined;
})

Then(/^verify text saying Invalid date format, must be YYYY-MM-DD$/, function() {
    expect(postPageObj.verifyErrorText()).to.be.eq('Invalid date format, must be YYYY-MM-DD');
})

Then(/^verify text saying Invalid hour format, must be HH:SS$/, function() {
    expect(postPageObj.verifyErrorText()).to.be.eq('Invalid hour format, must be HH:SS');
})
