@apriori-page
Feature: Check page with a-priori-data

  Background:
    Given a priori data should be loaded for page
    And user navigates to the login page

    Scenario: 1. Create page draft with just a title
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with just a title
      And user navigates to the pages page
      Then the page is in list
      And status page is draft

    Scenario: 2. Edit page draft with too long title
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with too long title
      Then error max characters is shown

    Scenario: 3. Edit page draft with weird title
      When user is logged in the application
      And user navigates to the pages page
      And user select recent updated page
      And user overwrite page title with weird text
      And user return to the pages page
      Then the weird page is in list
      And status page is draft

    Scenario: 4. Edit page draft with a RGB color code in title
      When user is logged in the application
      And user navigates to the pages page
      And user select recent updated page
      And user overwrite page title with RGB color code
      And user return to the pages page
      Then the page with RGB color code is in list
      And status page is draft

    Scenario: 5. Edit page draft with just an url in title
      When user is logged in the application
      And user navigates to the pages page
      And user select recent updated page
      And user overwrite page title with an url
      And user return to the pages page
      Then the page with an url is in list
      And status page is draft

    Scenario: 6. Edit page draft with a proper name in title
      When user is logged in the application
      And user navigates to the pages page
      And user select recent updated page
      And user overwrite page title with a proper name
      And user return to the pages page
      Then the page with a proper name is in list
      And status page is draft

    Scenario: 7. Edit page draft with a date in title
      When user is logged in the application
      And user navigates to the pages page
      And user select recent updated page
      And user overwrite page title with a date
      And user return to the pages page
      Then the page with a date is in list
      And status page is draft

    Scenario: 8. Edit page draft with an email in title
      When user is logged in the application
      And user navigates to the pages page
      And user select recent updated page
      And user overwrite page title with an email
      And user return to the pages page
      Then the page with an email is in list
      And status page is draft

    Scenario: 9. Create and Schedule page with a weird and email title
      When user is logged in the application
      And user navigates to the pages page
      And user select recent updated page
      And user overwrite page title with a weird and email
      And user return to the pages page
      Then the page with a weird and email is in list
      And status page is draft

    Scenario: 10. Create and feature page with a RGB color code and url title
      When user is logged in the application
      And user navigates to the pages page
      And user select recent updated page
      And user overwrite page title with a RGB color code and url
      And user return to the pages page
      Then the page with a RGB color code and url is in list
      And status page is draft
