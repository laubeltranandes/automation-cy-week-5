@post
Feature: Check posts functionality

    Background:
        Given user navigates to the login page

    Scenario: Do a login and publish a post and see it on the post list
        When user is logged in the application
        And user navigates to the post page
        And user clicks in new post button
        And user types Post test 1 as a post title
        And user clicks in Post content 1
        And user clicks in post publish button
        And user clicks in post continue publish button
        And user clicks in post continue publish button by twice
        And user clicks in editor button to go editor post page
        And user clicks in posts button to go post list page
        Then verify Post test 1 is in the post list

    Scenario: Do a login and schedule a post and see it on the post list
        When user is logged in the application
        And user navigates to the post page
        And user clicks in new post button
        And user types Post published test 1 as a post title
        And user clicks in Post content 1
        And user clicks in post publish button
        And user clicks in right now button
        And user clicks in scheduled for later button
        And user clicks in post continue publish button
        And user clicks in post continue publish button by twice
        And user clicks in editor button to go editor post page
        And user clicks in posts button to go post list page
        Then verify Post published test 1 is in the post list

    Scenario: Do a login and get a draft post and see it on the post list
        When user is logged in the application
        And user navigates to the post page
        And user clicks in new post button
        And user types Draft post test 1 as a post title
        And user clicks in Post content 1
        And user clicks in posts button to go post list page
        Then verify Draft post test 1 is in the post list

    Scenario: Do a login and public a draft post and delete it over draft post list
        When user is logged in the application
        And user navigates to the post page
        And user clicks in new post button
        And user types Draft post test 1 to delete as a post title
        And user clicks in Post content 1
        And user clicks in posts button to go post list page
        And user clicks in draft post button to go draft list page
        And user clicks in first post item to edit
        And user clicks in menu button
        And user clicks in delete button
        And user clicks in modal delete button
        Then verify Draft post test 1 to delete is not in the post list

    Scenario: Do a login and publish a post and see it on the post list
        When user is logged in the application
        And user navigates to the post page
        And user clicks in new post button
        And user types Post test 1 as a post title
        And user clicks in Post content 1
        And user clicks in post publish button
        And user clicks in post continue publish button
        And user clicks in post continue publish button by twice
        And user clicks in editor button to go editor post page
        And user clicks in posts button to go post list page
        And user clicks in published post button to go published list page
        And user clicks in first post item to see
        Then verify Published post test 1 has 0 publishes
