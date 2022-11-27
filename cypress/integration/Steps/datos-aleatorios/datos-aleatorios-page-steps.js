import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {pagesPage} from "../../../page-objects/pages-page";
import {faker} from '@faker-js/faker';

const pagesPageObj = new pagesPage();

When(/^user creates a draft with an alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.lorem.sentence(10));
});

When(/^user creates a draft with too long alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.lorem.paragraph(100));
    pagesPageObj.clickToPublishButton();
});

When(/^user creates a draft with weird alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.random.alphaNumeric(125));
});

When(/^user creates a draft with a RGB color code alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.color.rgb());
});

When(/^user creates a draft with an url alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.internet.url());
});

When(/^user creates a draft with a proper name alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.name.fullName());
});

When(/^user creates a draft with a date in alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.date.birthdate().toISOString());
});

When(/^user creates a draft with an email alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.internet.email());
});

When(/^user creates a draft with a weird and email alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.random.alphaNumeric(70)+faker.internet.email());
});

When(/^user creates a draft with a RGB color code and url alt text for image$/, function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.clickToAddImageButton();
    pagesPageObj.selectFirstImageListed();
    pagesPageObj.clickAltButtonToDescribeImage();
    pagesPageObj.putTextIntoAltField(faker.color.rgb()+faker.internet.email());
});