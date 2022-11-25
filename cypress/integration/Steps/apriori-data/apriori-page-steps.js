import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {pagesPage} from "../../../page-objects/pages-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

let selectedRow;
const pagesPageObj = new pagesPage();

Given(/^a priori data should be loaded for page$/, async function() {
    selectedRow = await mockaroo.getDataPoolRandom();
});