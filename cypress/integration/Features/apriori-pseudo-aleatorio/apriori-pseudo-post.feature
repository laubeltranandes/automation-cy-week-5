@apriori-pseudo-post
Feature: Check post with a-priori-data pseudo random

  Background:
    Given a priori data pseudo aletorio should be loaded for post
    And user navigates to the login page

    Scenario: Do a login and schedule usually a post and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in post publish button
      And user clicks in right now button
      And user clicks in scheduled for later button
      And user clicks in post continue publish button
      And user clicks in post continue publish button by twice
      And user clicks in editor button to go editor post page
      And user clicks in posts button to go post list page
      Then verify Scheduled post is in the post list using apriori pseudo post steps

    Scenario: Do a login and schedule a post and see an error saying Invalid date format by text into date input
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in post publish button
      And user clicks in right now button
      And user clicks in scheduled for later button
      And user types a text into date input
      And user clicks in post continue publish button
      Then verify text saying Invalid date format, must be YYYY-MM-DD

    Scenario: Do a login and schedule a post and see an error saying Invalid date format by weird text into date input
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in post publish button
      And user clicks in right now button
      And user clicks in scheduled for later button
      And user types a weird text into date input
      And user clicks in post continue publish button
      Then verify text saying Invalid date format, must be YYYY-MM-DD

    Scenario: Do a login and schedule a post and see it on the post list when scheduled date is adjusted properly
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in post publish button
      And user clicks in right now button
      And user clicks in scheduled for later button
      And user types a proper date into date input
      And user clicks in post continue publish button
      And user clicks in post continue publish button by twice
      And user clicks in editor button to go editor post page
      And user clicks in posts button to go post list page
      Then verify Scheduled post is in the post list using apriori pseudo post steps

    Scenario: Do a login and schedule a post and see an error saying Invalid hour format by text into hour input
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in post publish button
      And user clicks in right now button
      And user clicks in scheduled for later button
      And user types a text into hour type
      And user clicks in post continue publish button
      Then verify text saying Invalid hour format, must be HH:SS

    Scenario: Do a login and schedule a post and see an error saying Invalid hour format by date into hour input
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in post publish button
      And user clicks in right now button
      And user clicks in scheduled for later button
      And user types a date into hour type
      And user clicks in post continue publish button
      Then verify text saying Invalid hour format, must be HH:SS

    Scenario: Do a login and try plublishing a new post with a subsequent url and see a red alert banner
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in menu button
      And user types url for apriori pseudo post step
      And user clicks in post publish button
      Then verify alert banner

    Scenario: Do a login and try plublishing a new post with a weird subsequent url and see a red alert banner
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in menu button
      And user types a weird url for apriori pseudo post step
      And user clicks in post publish button
      Then verify alert banner

    Scenario: Do a login and try plublishing a new post with a large tag and see a red alert banner
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in menu button
      And user types a large tag input for apriori pseudo post step
      And user clicks in post publish button
      Then verify alert banner

    Scenario: Do a login and try plublishing a new post with a weird large tag and see a red alert banner
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title for apriori pseudo post step
      And user clicks in Post content 1
      And user clicks in menu button
      And user types a weird tag input for apriori pseudo post step
      And user clicks in post publish button
      Then verify alert banner