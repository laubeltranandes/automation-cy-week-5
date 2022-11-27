@apriori-pseudo-dashboard
Feature: Check dashboard with a-priori-data pseudo random

  Background:
    Given a priori data pseudo aletorio should be loaded for dashboard
    And user navigates to the login page

  Scenario: Check a user can add himself to the dashboard
    When user is logged in the application
    And user creates a new member for a priori pseudo dashboard step
    And user navigates to the dashboard page


  Scenario: Check a user can create himself to the dashboard validating email error
    When user is logged in the application
    And user creates and verify email field
    Then the email error message is displayed


  Scenario: Check a user can add himself to the dashboard and validate if it is duplicated
    When user is logged in the application
    And user creates a new member for a priori pseudo dashboard step
    And user navigates to the dashboard page
    And user creates a new member for a priori pseudo dashboard step
    Then the email error message is displayed

  Scenario: Check a user can create himself to the dashboard validating name error
    When user is logged in the application
    And user creates a new member for a priori pseudo dashboard step
    Then the  name error message is displayed

  Scenario: Check the dashboard is showing recent post section
    When user is logged in the application
    And user creates a new member for a priori pseudo dashboard step
    And user navigates to the dashboard page
    And the recent posts section is displayed

  Scenario: Check the dashboard is showing top sources section
    When user is logged in the application
    And user creates a new member for a priori pseudo dashboard step
    And user navigates to the dashboard page
    And the top sources section is displayed

  Scenario: Check the dashboard is showing engagement section
    When user is logged in the application
    And user creates a new member for a priori pseudo dashboard step
    And user navigates to the dashboard page
    And the engagement section is displayed