@datos-aleatorios-post
Feature: Check post with random data

  Background:
    Given user navigates to the login page

  Scenario: Do a login and add a proper title for google metadata before publishing a post
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in menu button
    And user clicks on google metadata content
    And user types a title less than 60 characters
    Then metadata google title is registered properly
    And metadata google title is green

  Scenario: Do a login and add a large title for google metadata before publishing a post
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in menu button
    And user clicks on google metadata content
    And user types a title greater than 60 characters
    Then metadata google title is registered properly
    And metadata google title is red

  Scenario: Do a login and add a proper description for google metadata before publishing a post
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in menu button
    And user clicks on google metadata content
    And user types a description less than 145 characters
    Then metadata google description is registered properly
    And metadata google description is green

  Scenario: Do a login and add a large description for google metadata before publishing a post
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in menu button
    And user clicks on google metadata content
    And user types a description greater than 145 characters
    Then metadata google description is registered properly
    And metadata google description is red

  Scenario: Do a login and add a proper url for google metadata before publishing a post
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in menu button
    And user clicks on google metadata content
    And user types an url into url field
    And user clicks on text area description field
    Then metadata google url is registered properly

  Scenario: Do a login and add a wrong url for google metadata before publishing a post
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in menu button
    And user clicks on google metadata content
    And user types a text into url field
    And user clicks on text area description field
    Then metadata google url is registered wrong

  Scenario: Do a login and add an email into url field for google metadata before publishing a post
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in menu button
    And user clicks on google metadata content
    And user types an email into url field
    And user clicks on text area description field
    Then metadata google url is registered wrong

  Scenario: Do a login and add an ip into url field for google metadata before publishing a post
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in menu button
    And user clicks on google metadata content
    And user types an ip 4 version into url field
    And user clicks on text area description field
    Then metadata google url is registered wrong

  Scenario: Do a login, edit a draft post and types a proper path into url field before publishing it
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in Post content 1
    And user clicks in posts button to go post list page
    And user clicks in draft post button to go draft list page
    And user clicks in first post item to edit
    And user clicks in menu button
    And user types a domain path into url field
    And user clicks in post publish button
    Then comes publishing page title up right now

  Scenario: Do a login, edit a draft post and types an url into url field before publishing it
    When user is logged in the application
    And user navigates to the post page
    And user clicks in new post button
    And user types a title for random post step
    And user clicks in Post content 1
    And user clicks in posts button to go post list page
    And user clicks in draft post button to go draft list page
    And user clicks in first post item to edit
    And user clicks in menu button
    And user types an url into url field out of google metadata
    And user clicks in post publish button
    Then verify alert banner