import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {dashboardPage} from "../../../page-objects/dashboard-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

const mockaroo = new MockarooClient();
let selectedRow;
const dashboardPageObj = new dashboardPage();

Given(/^a priori data should be loaded for dashboard$/, async function() {
    selectedRow = await mockaroo.getDataPoolRandom();
});

Then(/^the email error message is displayed$/, function () {
    dashboardPageObj.verifyEmailerrorValidation();
});

Then(/^the name error message is displayed$/, function () {
    dashboardPageObj.verifyNameErrorValidation();
});

Then(/^the duplicated error message is displayed$/, function () {
    dashboardPageObj.verifyDuplicatedErrorValidation();
});




