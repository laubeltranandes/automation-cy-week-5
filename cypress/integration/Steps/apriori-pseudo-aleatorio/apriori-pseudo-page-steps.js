import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {pagesPage} from "../../../page-objects/pages-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const pagePageObj = new pagesPage();

Given(/^a priori data pseudo aletorio should be loaded for page$/, function() {
    const mockarooClient = new MockarooClient();
    selectedRow = mockarooClient.getDataPoolFromAPI();
});