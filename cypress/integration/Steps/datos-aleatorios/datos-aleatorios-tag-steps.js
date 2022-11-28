import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {tagPage} from "../../../page-objects/tags-page";
import {faker} from '@faker-js/faker';

const tagPageObj = new tagPage();
const title = "";
And(/^user types a limit characters name$/, function() {
     title = faker.word.adjective(300);
    tagPageObj.typeTagTitle(title);
});

And(/^user types a characters name$/, function() {
    title = faker.name(300);
    tagPageObj.typeTagTitle(title);
});

And(/^user types a limit characters description$/, function() {
    const description = faker.word.adjective(501);
    tagPageObj.inputAreaTagDescription(description);
});

And(/^user types a characters description$/, function() {
    const description = faker.word.adjective(1);
    tagPageObj.inputAreaTagDescription(description);
});

And(/^user types a limit characters slug$/, function() {
    const slug = faker.word.adjective(201);
    tagPageObj.inputSlug(slug);
});

And(/^user types a characters slug$/, function() {
    const slug = faker.word.adjective(5);
    tagPageObj.inputSlug(slug);
});

And(/^user types a limit characters meta title$/, function() {
    const metaTitle = faker.word.adjective(70);
    tagPageObj.inputSlug(metaTitle);
});

And(/^user types a characters meta title$/, function() {
    const metaTitle = faker.word.adjective(10);
    tagPageObj.inputSlug(metaTitle);
});

And(/^user types a limit characters cannonical url$/, function() {
    const url = faker.word.adjective(125);
    tagPageObj.inputTagCanonicalUrl(url);
});

And(/^user types a characters cannonical url$/, function() {
    const url = faker.word.adjective(125);
    tagPageObj.inputTagCanonicalUrl(url);
});

And(/^user types a limit meta description$/, function() {
    const metaDescription = faker.word.adjective(157);
    tagPageObj.inputTagMetaDescription(metaDescription);
});

And(/^user types a meta description$/, function() {
    const metaDescription = faker.word.adjective(20);
    tagPageObj.inputTagMetaDescription(metaDescription);
});

And(/^user types a random hex color$/, function() {
    const color = faker.color.rgb({ format: 'hex', casing: 'lower' })
    tagPageObj.inputTagMetaDescription(color);
});

Then(/^verify tag isnt in the tag list faker$/, function() {
    expect(tagPageObj.verifyTagTitleOnList(title)).not.to.be.undefined;
})
