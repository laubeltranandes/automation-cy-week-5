@tags
Feature: Check tags functionality

  Background:
    Given user navigates to the login page

  Scenario: Create a tag and see ir on the tag list
    When user is logged in the application
    And user navigates to the tag page
    And user click in new tag button
    And a new tag is created
    And  user navigates to the tag page
    Then verify the title tag

  Scenario: Edit title and color tag
    When user is logged in the application
    And user navigates to the tag page
    And user click in tag item
    And edit title a color text
    And user click in save button
    #   And  user navigates to the tag page
    Then verify the title edited tag

  Scenario: Reject Delete
    When user is logged in the application
    And user navigates to the tag page
    And user click in tag item
    And user click in deleted button
    And user click in reject button
    And  user navigates to the tag page
    Then return the tags list

  Scenario: Create a new tag and save without the field name
    When user is logged in the application
    And user navigates to the tag page
    And user click in new tag button
    And user click in save button
    Then user expect to see error

  Scenario: Accepet Delete
    When user is logged in the application
    And user navigates to the tag page
    And user click in tag item
    And user click in deleted button
    And user click in accept button
    And user navigates to the tag page
    Then return the tags list



