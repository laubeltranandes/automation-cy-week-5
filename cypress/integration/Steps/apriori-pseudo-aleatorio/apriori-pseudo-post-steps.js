import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {postPage} from "../../../page-objects/post-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const postPageObj = new postPage();

Given(/^a priori data pseudo aletorio should be loaded for post$/, async function() {
    selectedRow = await mockaroo.getDataPoolFromAPI();
});