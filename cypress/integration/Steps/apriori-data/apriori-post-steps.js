import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {postPage} from "../../../page-objects/post-page";
import { MockarooClient } from "../mockarooClient/mockarooClient";

const mockaroo = new MockarooClient();
let selectedRow;
const postPageObj = new postPage();

Given(/^a priori data should be loaded for post$/, function() {
    selectedRow = mockaroo.getDataPoolRandom();
});