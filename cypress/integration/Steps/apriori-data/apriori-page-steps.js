import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {pagesPage} from "../../../page-objects/pages-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const pagesPageObj = new pagesPage();
const mockaroo = new MockarooClient();

Given(/^a priori data should be loaded for page$/, async function() {
    selectedRow = await mockaroo.getDataPoolRandom();
});

When(/^user creates a draft with just a title$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle(selectedRow.title);
    pagesPageObj.clickTextAreaPageDescription();
})

Then(/^the page is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.title);
})

Then(/^status page is draft$/, async function() {
    pagesPageObj.verifyStatusUnpublishedPage();
})

When(/^user creates a draft with too long title$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle((selectedRow.description + selectedRow.description + selectedRow.description).replaceAll("\n", ""));
    pagesPageObj.clickToPublishButton()
})

Then(/^error max characters is shown$/, async function() {
    pagesPageObj.verifyErrorMaxTitleCharactersIsShown()
})

When(/^user overwrite page title with weird text$/, async function() {
    pagesPageObj.clearTitleText()
    pagesPageObj.putInputParamOnPageTitle(selectedRow.test_field);
    pagesPageObj.clickTextAreaPageDescription();
})

When(/^user select recent updated page$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.selectFirstPageOnList()
})

When(/^user return to the pages page$/, async function() {
    pagesPageObj.returnToPageList();
})

Then(/^the weird page is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.test_field);
})

When(/^user overwrite page title with RGB color code$/, async function() {
    pagesPageObj.clearTitleText()
    pagesPageObj.putInputParamOnPageTitle(selectedRow.color);
    pagesPageObj.clickTextAreaPageDescription();
})

Then(/^the page with RGB color code is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.color);
})

When(/^user overwrite page title with an url$/, async function() {
    pagesPageObj.clearTitleText()
    pagesPageObj.putInputParamOnPageTitle(selectedRow.url.substring(0, 254));
    pagesPageObj.clickTextAreaPageDescription();
})

Then(/^the page with an url is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.url.substring(0, 254));
})

When(/^user overwrite page title with a proper name$/, async function() {
    pagesPageObj.clearTitleText()
    pagesPageObj.putInputParamOnPageTitle(selectedRow.name);
    pagesPageObj.clickTextAreaPageDescription();
})

Then(/^the page with a proper name is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.name);
})

When(/^user overwrite page title with a date$/, async function() {
    pagesPageObj.clearTitleText()
    pagesPageObj.putInputParamOnPageTitle(selectedRow.date);
    pagesPageObj.clickTextAreaPageDescription();
})

Then(/^the page with a date is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.date);
})

When(/^user overwrite page title with an email$/, async function() {
    pagesPageObj.clearTitleText()
    pagesPageObj.putInputParamOnPageTitle(selectedRow.email);
    pagesPageObj.clickTextAreaPageDescription();
})

Then(/^the page with an email is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.email);
})

When(/^user overwrite page title with a weird and email$/, async function() {
    pagesPageObj.clearTitleText()
    pagesPageObj.putInputParamOnPageTitle(selectedRow.test_field + selectedRow.email);
    pagesPageObj.clickTextAreaPageDescription();
})

Then(/^the page with a weird and email is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.test_field + selectedRow.email);
})

When(/^user overwrite page title with a RGB color code and url$/, async function() {
    pagesPageObj.clearTitleText()
    pagesPageObj.putInputParamOnPageTitle(selectedRow.color + selectedRow.url.substring(0, 200));
    pagesPageObj.clickTextAreaPageDescription();
})

Then(/^the page with a RGB color code and url is in list$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage(selectedRow.color + selectedRow.url.substring(0, 200));
})
