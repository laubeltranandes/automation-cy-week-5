import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {pagesPage} from "../../../page-objects/pages-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const pagesPageObj = new pagesPage();
const mockaroo = new MockarooClient();

Given(/^a priori data pseudo aletorio should be loaded for page$/, async function() {
    selectedRow = await mockaroo.getDataPoolFromAPI();
});

When(/^user creates a draft with just a title as description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.title);
})

When(/^user create the page with too long description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.description + selectedRow.description + selectedRow.description + selectedRow.description + selectedRow.description);
})

When(/^user create the page with weird description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.test_field);
})

When(/^user create the page with RGB color code description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.color);
})

When(/^user create the page with url description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.url);
})

When(/^user create the page with proper name description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.name);
})

When(/^user create the page with date description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.date);
})

When(/^user create the page with email description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.email);
})

When(/^user create the page with weird and email description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.test_field+selectedRow.email);
})

When(/^user create the page with RGB color code and url description$/, async function() {
    pagesPageObj.clickToNewPageButton();
    pagesPageObj.putInputParamOnPageTitle("\n"+selectedRow.color+selectedRow.url);
})

Then(/^the mos recent page in list is untitled$/, async function() {
    pagesPageObj.clickOnOrderFilter();
    pagesPageObj.selectRecentlyUpdatedOptionFilter();
    pagesPageObj.verifyTitleDraftPage("Untitled");
})