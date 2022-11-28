@apriori-pseudo-tag
Feature: Check tag with a-priori-data pseudo random

  Background:
    Given a priori data pseudo aletorio should be loaded for tag
    And user navigates to the login page

  Scenario: Do a login and create a public tag with random valid name and verify the list
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random api valid name
      And user click in save button
      And user navigates to the tag page
      Then verify tag is in the tag list
  
    Scenario: Do a login and create a public tag with random valid name and verify the list and delete the tag
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random api valid name
      And user click in save button
      And user navigates to the tag page
      And user click in tag item
      And user click in deleted button 
      And user click in accept button
      And user navigates to the tag page
      Then return the tags list    

    Scenario: Do a login and create a public tag with random invalid name return the list
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random api invalid name
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list
    
    Scenario: Do a login and create a public tag with random valid name and color valid
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random valid name
      And user types a valid color
      And user click in save button
      And user navigates to the tag page
      Then verify tag is in the tag list

    Scenario: Do a login and create a public tag with random valid name and color invalid
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random api valid name
      And user types a random api invalid color
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list
    
    Scenario: Do a login and create a public tag with random valid name and random color valid and random invalid cannonical url
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random api valid name
      And user types a random api valid color
      And user types a random api invalid cannocial url
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list

    Scenario: Do a login and create a public tag with random valid name and edit with invalid name
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random api valid  name
      And user click in save button
      And user navigates to the tag page
      And user click in tag item
      And user types a random api invalid  name
      And user click in save button
      Then user expect to see error
      And user navigates to the tag page
    
    Scenario: Create a new tag and save without the field name, random valid name and save
      When user is logged in the application    
      And user navigates to the tag page   
      And user click in new tag button
      And user click in save button
      And user expect to see error
      And user types a random api valid name
      And user click in save button
      And user navigates to the tag page
      Then verify tag is in the tag list