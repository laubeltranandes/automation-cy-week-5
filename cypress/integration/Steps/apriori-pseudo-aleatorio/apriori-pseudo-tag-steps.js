import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {tagPage} from "../../../page-objects/tags-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const tagPageObj = new tagPage();

Given(/^a priori data pseudo aletorio should be loaded for post$/, async function() {
    selectedRow = await mockaroo.getDataPoolFromAPI();
});

And(/^user types a random api valid name$/, function() {
    tagPageObj.typeTagTitle(selectedRow.title);
});

And(/^user types a random api invalid name$/, function() {
    tagPageObj.typeTagTitle(selectedRow.color);
});

And(/^user types a random api invalid color$/, function() {
    tagPageObj.typeColor(selectedRow.title);
});

And(/^user types a random api valid color$/, function() {
    tagPageObj.typeColor(selectedRow.color);
});

And(/^user types a random api invalid cannocial url$/, function() {
    tagPageObj.inputTagCanonicalUrl(selectedRow.color);
});

And(/^user types a random api valid cannocial url$/, function() {
    tagPageObj.inputTagCanonicalUrl(selectedRow.url);
});

Then(/^verify tag isnt in the tag list$/, function() {
    expect(tagPageObj.verifyTagTitleOnList(selectedRow.title)).to.be.undefined;
})
