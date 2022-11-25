import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {dashboardPage} from "../../../page-objects/dashboard-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const dashboardPageObj = new dashboardPage();

Given(/^a priori data should be loaded for dashboard$/, function() {
    const mockarooClient = new MockarooClient();
    selectedRow = mockarooClient.getDataPoolRandom();
});