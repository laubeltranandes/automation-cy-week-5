import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {tagPage} from "../../../page-objects/tags-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const tagPageObj = new tagPage();

Given(/^a priori data should be loaded for tag$/, async function() {
    selectedRow = await mockaroo.getDataPoolRandom();
});