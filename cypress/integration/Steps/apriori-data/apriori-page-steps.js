import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {pagePage} from "../../../page-objects/page-page";
import {MockarooClient} from "../mockarooClient";

let selectedRow;
const pagePageObj = new pagePage();

Given(/^a priori data should be loaded for page$/, function() {
    const mockarooClient = new MockarooClient();
    selectedRow = mockarooClient.getDataPoolRandom();
});