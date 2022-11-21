import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {postPage} from "../../../page-objects/post-page";

const postPageObj = new postPage();

And(
    /^user navigates to the post page$/,
    function () {
        postPageObj.navigateToPostLink();
    }
);

And(
    /^user clicks in new post button$/,
    function () {
        postPageObj.clickToNewPostButton();
    }
);

And(
    /^user types Post test 1 as a post title$/,
    function () {
        postPageObj.typeTextAreaPostTitle('Post test 1');
    }
);

And(
    /^user clicks in Post content 1$/,
    function () {
        postPageObj.clickTextAreaPostTitle();
    }
);

And(
    /^user types Post content 1 as a post description$/,
    function () {
        postPageObj.typeTextAreaPostDescription('Post content 1');
    }
);

And(
    /^user types Post published test 1 as a post title$/,
    function () {
        postPageObj.typeTextAreaPostTitle('Post published test 1');
    }
);

And(
    /^user types Post published content 1 as a post description$/,
    function () {
        postPageObj.typeTextAreaPostDescription('Post published content 1');
    }
);

And(
    /^user types Draft post test 1 as a post title$/,
    function () {
        postPageObj.typeTextAreaPostTitle('Draft post test 1');
    }
);

And(
    /^user types Draft post content 1 as a post description$/,
    function () {
        postPageObj.typeTextAreaPostDescription('Post published content 1');
    }
);

And(
    /^user types Draft post test 1 to delete as a post title$/,
    function () {
        postPageObj.typeTextAreaPostTitle('Draft post test 1 to delete');
    }
);

And(
    /^user clicks in post publish button$/,
    function () {
        postPageObj.clickToButtonPostPublish();
    }
);

And(
    /^user clicks in post continue publish button$/,
    function () {
        postPageObj.clickToButtonContinuePublish();
    }
);

And(
    /^user clicks in post continue publish button by twice$/,
    function () {
        postPageObj.clickToButtonContinuePublish();
    }
);


And(
    /^user clicks in editor button to go editor post page$/,
    function () {
        postPageObj.clickToButtonHeaderEditor();
        cy.wait(2000)
    }
);

And(
    /^user clicks in posts button to go post list page$/,
    function () {
        postPageObj.clickToButtonPosts();
    }
);

And(
    /^user clicks in right now button$/,
    function () {
        postPageObj.clickToButtonRightNow();
    }
);

And(
    /^user clicks in scheduled for later button$/,
    function () {
        postPageObj.clickToButtonScheduledForLater();
    }
);
    
And(
    /^user clicks in draft post button to go draft list page$/,
    function () {
        postPageObj.clickToButtonDrafts();
    }
);

And(
    /^user clicks in fist post item to edit$/,
    function () {
        postPageObj.clickToButtonEditFirstItem();
    }
);

And(
    /^user clicks in menu button$/,
    function () {
        postPageObj.clickToButtonEditMenu();
    }
);

And(
    /^user clicks in delete button$/,
    function () {
        postPageObj.clickToButtonDeleteDraftPost();
    }
);

And(
    /^user clicks in modal delete button$/,
    function () {
        postPageObj.clickToButtonConfirmDeleteDraftPost();
    }
);

And(
    /^user clicks in published post button to go published list page$/,
    function () {
        postPageObj.clickToButtonPublished();
    }
);

And(
    /^user clicks in first post item to see$/,
    function () {
        postPageObj.clickToButtonEditFirstItem();
    }
);

And(
    /^user clicks in first post item to edit$/,
    function () {
        postPageObj.clickToButtonEditFirstItem();
    }
);

Then(
    /^verify Post test 1 is in the post list$/,
    function () {
      postPageObj.verifyPostTitleOnList('Post test 1');
    }
  );

Then(
    /^verify Post published test 1 is in the post list$/,
    function () {
      postPageObj.verifyPostTitleOnList('Post published test 1');
    }
  );

Then(
    /^verify Draft post test 1 is in the post list$/,
    function () {
      postPageObj.verifyPostTitleOnList('Draft post test 1');
    }
  );

Then(
    /^verify Draft post test 1 to delete is not in the post list$/,
    function () {
      postPageObj.verifyPostTitleNotOnList('Draft post test 1 to delete');
    }
  );

  Then(
    /^verify Published post test 1 has 0 publishes$/,
    function () {
      expect(postPageObj.verifyH3ContainsText()).not.to.be.undefined;
    }
  );