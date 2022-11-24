import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {tagPage} from "../../../page-objects/tags-page";
import {MockarooClient} from "../mockarooClient";

let selectedRow;
const tagPageObj = new tagPage();

Given(/^a priori data pseudo aletorio should be loaded for post$/, function() {
    const mockarooClient = new MockarooClient();
    selectedRow = mockarooClient.getDataPoolFromAPI();
});