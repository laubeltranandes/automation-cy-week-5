import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {pagesPage} from "../../../page-objects/pages-page";

const pagesPageObj = new pagesPage();


When(/^a new page is created$/, function () {
    pagesPageObj.putInputPageTitle();
    pagesPageObj.putTextAreaPageDescription();
    pagesPageObj.clickToPublishButton();
    pagesPageObj.clickToContinuePublishButton();
    pagesPageObj.clickToPublisRightNowhButton();
    pagesPageObj.clickToBackToEditorButton();     
});

When(/^user edit the page$/, function () {
    pagesPageObj.putInputPageEditedTitle();
    pagesPageObj.putTextAreaPageDescription();
    pagesPageObj.clickOnUpdatePageButton();
});

When(/^user unpublish the page$/, function () {
    pagesPageObj.clickOnUnpublishPageButton();
    pagesPageObj.clickOnConfirmationUnpublishPageButton();
});

When(/^user delete the page$/, function () {
    pagesPageObj.clickOnPageSettingButton();
    pagesPageObj.clickOnDeletePageButton();
    pagesPageObj.clickConfirmationDeletePageButton();
});

When(/^a new page is scheduled$/, function () {
    pagesPageObj.putInputPageTitle();
    pagesPageObj.putTextAreaPageDescription();
    pagesPageObj.clickToPublishButton();
    pagesPageObj.clickOnSelectPublishPageModeButton();
    pagesPageObj.selectScheduleForLateOption();
    pagesPageObj.selectSetTwoDaysLater();
    pagesPageObj.clickToContinuePublishButton();
    pagesPageObj.clickToPublisRightNowhButton();
    pagesPageObj.clickOnGoBackToPageEditorButton();     
});

Then(
  /^verify the title new page$/,
  function () {
    pagesPageObj.verifyTitleNewPage();
  }
);

And(
    /^user navigates to the pages page$/,
    function () {
        pagesPageObj.navigateToPageLink();
    }
);

And(
    /^user click in new page button$/,
    function () {
        pagesPageObj.clickToNewPageButton();
    }
);

And(
    /^user click in first page to edit it$/,
    function () {
        pagesPageObj.clickFirstPage();
    }
);

Then(
    /^verify the title edited page$/,
    function () {
        pagesPageObj.verifyTitleEditedPage();
    }
);

Then(
    /^verify the status unpublished page$/,
    function () {
        pagesPageObj.verifyStatusUnpublishedPage();
    }
);

Then(
    /^verify the title is not in pages list$/,
    function () {
        pagesPageObj.verifyPageIsNotInList();
    }
);

Then(
    /^verify the status sheduled page$/,
    function () {
        pagesPageObj.verifyStatusScheduledPage();
    }
);