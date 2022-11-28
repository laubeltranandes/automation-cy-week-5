import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {tagPage} from "../../../page-objects/tags-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const tagPageObj = new tagPage();
const mockaroo = new MockarooClient();
Given(/^a priori data should be loaded for tag$/, async function() {    
    selectedRow = await mockaroo.getDataPoolRandom();
});

And(/^user click to internal tags$/, function() {
    tagPageObj.clickToInternalTag();
});

And(/^user types a random valid name$/, function() {
    tagPageObj.typeTagTitle(selectedRow.title);
});

And(/^user types a random invalid name$/, function() {
    tagPageObj.typeTagTitle(selectedRow.test_field);
});

And(/^user types a random valid description$/, function() {
    tagPageObj.inputAreaTagDescription(selectedRow.description);
});

And(/^user types a random invalid description$/, function() {
    tagPageObj.inputAreaTagDescription(selectedRow.test_field);
});


And(/^user types a random valid slug$/, function() {
    tagPageObj.inputAreaTagDescription(selectedRow.name);
});

And(/^user types a random valid meta title$/, function() {
    tagPageObj.inputTagMetaTitle(selectedRow.title);
});

And(/^user types a random canonical valid url$/, function() {
    tagPageObj.inputTagCanonicalUrl(selectedRow.url);
});

And(/^user types a random canonical invalid url$/, function() {
    tagPageObj.inputTagCanonicalUrl(selectedRow.test_field);
});


And(/^user types a random meta valid description$/, function() {
    tagPageObj.inputTagCanonicalUrl(selectedRow.description);
});

And(/^user types a valid color$/, function() {
    tagPageObj.typeColor(selectedRow.color);
});

And(/^user types a invalid color$/, function() {
    tagPageObj.typeColor(selectedRow.title);
});


Then(/^verify tag is in the tag list$/, function() {
    expect(tagPageObj.verifyTagTitleOnList(selectedRow.title)).not.to.be.undefined;
})

Then(
    /^user expect to see color error$/,
    function () {
      tagPageObj.messageColorError("The colour should be in valid hex format");
    }
  );

Then(
    /^user expect to see url error$/,
    function () {
      tagPageObj.messageColorError("The url should be a valid url");
    }
  );