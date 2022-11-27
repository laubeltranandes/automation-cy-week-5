@apriori-dashboard
Feature: Check dashboard with a-priori-data

  Background:
    Given a priori data should be loaded for dashboard
    And user navigates to the login page

  Scenario Outline: Check a user can add himself to the dashboard
    When user is logged in the application
    And a specific new member is created using <name> and <email>
    And user navigates to the dashboard page
    Then the total members counter should be 4
    And the user is deleted
    Examples:
      | name            | email                   |
      | Test Random     | testRandom@gmail        |
      | Elvis Presley   | elvis1234@gmail.com     |
      | Pedro Alvarez   | pedro_zzz@gmail.com.edu |
      | David Buitrago  | davidApellido@gmail.com |
      | Carolina Andrea | 12334Carolina@gmail.com |

  Scenario Outline: Check a user can create himself to the dashboard validating email error
    When user is logged in the application
    And a specific new member is created using <name> and <email>
    Then the email error message is displayed
    Examples:
      | name          | email                 |
      | Test Random   | testRandom@gmail      |
      | Test Lastname | test@gmail.eds.ss.and |

  Scenario Outline: Check a user can create himself to the dashboard validating name error
    When user is logged in the application
    And a specific new member is created using <name> and <email>
    Then the  name error message is displayed
    Examples:
      | name        | email            |
      | !!!!!AA1223 | random@gmail.com |
      | Tests       | test@gmail.com   |

  Scenario Outline: Check a user can add himself to the dashboard and validate if it is duplicated
    When user is logged in the application
    And a specific new member is created using <name> and <email>
    And user navigates to the dashboard page
    And a specific new member is created using <name> and <email>
    Then the duplicated error message is displayed
    Examples:
      | name          | email               |
      | Elvis Presley | elvis1234@gmail.com |

  Scenario Outline: Check a user can create himself to the dashboard validating name error
    When user is logged in the application
    And a specific new member is created using <name> and <email>
    Then the  name error message is displayed
    Examples:
      | name        | email            |
      | !!!!!AA1223 | ramdom@gmail.com |
      | Tests       | test@gmail.com   |

  Scenario Outline: Check the dashboard is showing recent post section
    When user is logged in the application
    And a specific new member is created using <name> and <email>
    And user navigates to the dashboard page
    And the recent posts section is displayed
    Examples:
      | name       | email                     |
      | Test Posts | testRecentPoste@gmail.com |

  Scenario Outline: Check the dashboard is showing top sources section
    When user is logged in the application
    And a specific new member is created using <name> and <email>
    And user navigates to the dashboard page
    And the top sources section is displayed
    Examples:
      | name         | email                 |
      | Test Sources | testSources@gmail.com |


  Scenario Outline: Check the dashboard is showing engagement section
    When user is logged in the application
    And a specific new member is created using <name> and <email>
    And user navigates to the dashboard page
    And the engagement section is displayed
    Examples:
      | name            | email                    |
      | Test Engagement | testEngagement@gmail.com |
