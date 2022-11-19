@tags
Feature: Check tags functionality

  Background:
    Given user navigates to the login page

  Scenario: Create a page and see it on the page list
    When user is logged in the application    
    And user navigates to the pages page
    And user click in new page button
    And a new page is created 
    And user navigates to the pages page
    Then verify the title new page 

  Scenario: Edit first page and see it on the page list
    When user is logged in the application    
    And user navigates to the pages page
    And user click in first page to edit it
    And user edit the page
    And user navigates to the pages page
    Then verify the title edited page

  Scenario: Unpublish first page and see it on the page list
    When user is logged in the application    
    And user navigates to the pages page
    And user click in first page to edit it
    And user unpublish the page
    And user navigates to the pages page
    Then verify the title edited page
    And verify the status unpublished page

  Scenario: Delete first page and should no see it on the page list
    When user is logged in the application    
    And user navigates to the pages page
    And user click in first page to edit it
    And user delete the page
    Then verify the title is not in pages list

  Scenario: Shedule a page and see it on the page list
    When user is logged in the application    
    And user navigates to the pages page
    And user click in new page button
    And a new page is scheduled
    And user navigates to the pages page
    Then verify the title new page 
    And verify the status sheduled page