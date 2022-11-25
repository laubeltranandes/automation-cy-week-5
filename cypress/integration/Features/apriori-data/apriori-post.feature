@apriori-post
Feature: Check post with a-priori-data

  Background:
    Given a priori data should be loaded for post
    And user navigates to the login page

    Scenario: Do a login and publish a post and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
