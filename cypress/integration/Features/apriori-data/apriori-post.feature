@apriori-post
Feature: Check post with a-priori-data

  Background:
    Given a priori data should be loaded for post
    And user navigates to the login page

    Scenario: Do a login and do a draft post and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in posts button to go post list page
      Then verify Draft post is in the post list

    Scenario: Do a login and do a weird draft post and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a weird title
      And user clicks in Post content 1
      And user clicks in posts button to go post list page
      Then verify Draft weird post is in the post list

    Scenario: Do a login and do a draft post with url and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in menu button
      And user types url
      And user clicks in posts button to go post list page
      Then verify alert banner

    Scenario: Do a login and do a draft post with weird url and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in menu button
      And user types weird url
      And user clicks in posts button to go post list page
      Then verify alert banner

    Scenario: Do a login and do a draft post with date and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in menu button
      And user types date input
      And user clicks in posts button to go post list page
      Then verify Draft post is in the post list

    Scenario: Do a login and do a draft post with text date and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in menu button
      And user types date input as text
      And user clicks in posts button to go post list page
      Then verify alert banner

    Scenario: Do a login and do a draft post with weird date and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in menu button
      And user types a weird date input
      And user clicks in posts button to go post list page
      Then verify alert banner

    Scenario: Do a login and do a draft post with excerpt and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in menu button
      And user types excerpt input
      And user clicks in posts button to go post list page
      Then verify Draft post is in the post list

    Scenario: Do a login and do a draft post with weird excerpt and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in menu button
      And user types a weird excerpt input
      And user clicks in posts button to go post list page
      Then verify alert banner

    Scenario: Do a login and do a draft post with a large tag and see it on the post list
      When user is logged in the application
      And user navigates to the post page
      And user clicks in new post button
      And user types a title
      And user clicks in Post content 1
      And user clicks in menu button
      And user types a large tag input
      And user clicks in posts button to go post list page
      Then verify alert banner
