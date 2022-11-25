@apriori-pseudo-post
Feature: Check post with a-priori-data pseudo random

  Background:
    Given a priori data pseudo aletorio should be loaded for post
    And user navigates to the login page

    Scenario: Do a login and schedule a post and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      #And user clicks in Post content 1
      #And user clicks in post publish button
      #And user clicks in right now button
      #And user clicks in scheduled for later button
      #And user clicks in post continue publish button
      #And user clicks in post continue publish button by twice
      #And user clicks in editor button to go editor post page
      #And user clicks in posts button to go post list page
      #Then verify Post published test 1 is in the post list