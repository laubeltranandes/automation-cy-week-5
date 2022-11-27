@apriori-pseudo-page
Feature: Check page with a-priori-data pseudo random

  Background:
    Given a priori data pseudo aletorio should be loaded for page
    And user navigates to the login page

    Scenario: 1. Create page draft with just a title as description
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with just a title as description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 2. Create page draft with too long description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with too long description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 3. Create page draft with weird description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with weird description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 4. Create page draft with a RGB color code in description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with RGB color code description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 5. Create page draft wit just an url in description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with url description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 6. Create page draft with a proper name in description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with proper name description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 7. Create page draft with a date in description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with date description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 8. Create page draft with an email description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with email description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 9. Create page draft with a weird and email description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with weird and email description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 10. Create page draft with a RGB color code and url description
      When user is logged in the application
      And user navigates to the pages page
      And user create the page with RGB color code and url description
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft