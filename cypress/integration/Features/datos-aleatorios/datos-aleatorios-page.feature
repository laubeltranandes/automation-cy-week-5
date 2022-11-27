@datos-aleatorios-page
Feature: Check page with random data

  Background:
    Given user navigates to the login page

    Scenario: 1. Create page draft with an alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with an alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 2. Create page draft with too long alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with too long alt text for image
      Then error max characters is shown

    Scenario: 3. Create page draft with weird alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with weird alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 4. Create page draft with a RGB color code in alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with a RGB color code alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 5. Create page draft with an url in alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with an url alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 6. Create page draft with a proper name in alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with a proper name alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 7. Create page draft with a date in alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with a date in alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 8. Create page draft with an email alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with an email alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 9. Create page draft with a weird and email alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with a weird and email alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft

    Scenario: 10. Create page draft with a RGB color code and url alt text for image
      When user is logged in the application
      And user navigates to the pages page
      And user creates a draft with a RGB color code and url alt text for image
      And user navigates to the pages page
      Then the mos recent page in list is untitled
      And status page is draft