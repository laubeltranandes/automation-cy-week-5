import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {dashboardPage} from "../../../page-objects/dashboard-page";
import { membersPage } from "../../../page-objects/members-page";
import {MockarooClient} from "../mockarooClient/mockarooClient";

const mockaroo = new MockarooClient();
let selectedRow;
const dashboardPageObj = new dashboardPage();
const membersPageObj = new membersPage();

Given(/^a priori data pseudo aletorio should be loaded for dashboard$/, async function() {
    selectedRow = await mockaroo.getDataPoolFromAPI();
});

And(
    /^user creates a new member for a priori pseudo dashboard step$/,
    function () {
        dashboardPageObj.navigateToMembers();
        dashboardPageObj.clickNewMemberButton();
        membersPageObj.enterMemberName(selectedRow.name);
        membersPageObj.enterEmail(selectedRow.email);
        membersPageObj.clickSaveButton()
    }
);

And(
    /^user creates and verify email field$/,
    function () {
        dashboardPageObj.navigateToMembers();
        dashboardPageObj.clickNewMemberButton();
        membersPageObj.enterMemberName(selectedRow.name);
        membersPageObj.enterEmail(selectedRow.email);
        membersPageObj.clickSaveButton()
    }
);






