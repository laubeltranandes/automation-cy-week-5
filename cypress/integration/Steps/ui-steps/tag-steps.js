import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {tagPage} from "../../../page-objects/tags-page";

const tagPageObj = new tagPage();


When(/^a new tag is created$/, function () {
  tagPageObj.putInputTagName();
  tagPageObj.putTextAreaTagDescription();
  tagPageObj.putInputTagColor();
  tagPageObj.clickToButtonTagExpand();
  tagPageObj.putInputTagMetaTitle();
  tagPageObj.putTextAreaTagMetaDescription();
  tagPageObj.putInputTagCannonicalUrl();
  tagPageObj.clickToButtonSaveTag();     
//   tagPageObj.clickToButtonLeaveModal();
});


Then(
  /^verify the title tag$/,
  function () {
    tagPageObj.verifyNewTitleTag();
  }
);

And(
    /^user navigates to the tag page$/,
    function () {
        tagPageObj.navigateToTagLink();
    }
);

And(
    /^user click in new tag button$/,
    function () {
        tagPageObj.clickToNewTagButton();
    }
);

And(
    /^user click in tag item$/,
    function () {
        tagPageObj.clickToLinkFirstTagList();
    }
);

And(
    /^edit title a color text$/,
    function () {
        tagPageObj.editColorAndTitleItems();
    }
);

And(
    /^user click in deleted button$/,
    function () {
        tagPageObj.clickToButtonTagDelete();
    }
);

And(
    /^user click in reject button$/,
    function () {
        tagPageObj.clickToButtonTagRejectModal();
    }
);

And(
    /^user click in accept button$/,
    function () {
        tagPageObj.clickToButtonTagAcceptModal();
    }
);

And(
    /^user click in save button$/,
    function () {
        tagPageObj.clickToButtonSaveTag();        
    }
);


Then(
    /^verify the title edited tag$/,
    function () {
      tagPageObj.verifyTitleTag();
    }
  );

Then(
    /^return the tags list$/,
    function () {
      tagPageObj.naviageteReturnList();
    }
  );

Then(
    /^user expect to see error$/,
    function () {
      tagPageObj.messageError();
    }
  );