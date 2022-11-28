@datos-aleatorios-tag
Feature: Check tag with random data

  Background:
    Given user navigates to the login page
    And user navigates to the login page
  

   Scenario: Do a login and create a public tag with limit characters name
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a limit characters name
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list faker

  
   Scenario: Do a login and create a public tag with name valid, description limit characters
   
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a characters name
      And user types a limit characters description
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list faker
    
    Scenario: Do a login and create a public tag with name valid, description valid, limit characteres slug
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a characters name
      And user types a characters description
      And user types a limit characters slug
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list faker

    Scenario: Do a login and create a internal tag with random name ok, limit characteres meta title
    When user is logged in the application
      And user navigates to the tag page
      And user click to internal tags
      And user click in new tag button
      And user types a characters name
      And user click in expand button
      And user types a limit characters meta title
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list faker

    Scenario: Do a login and create a internal tag with random name ok, meta title ok, url limit characters
    When user is logged in the application
      And user navigates to the tag page
      And user click to internal tags
      And user click in new tag button
      And user types a characters name
      And user click in expand button
      And And user types a characters characters meta title
      And user types a limit characters cannonical url
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list faker

    Scenario: Do a login and create a internal tag with random name ok, meta title ok, url ok and limit description
    When user is logged in the application
      And user navigates to the tag page
      And user click to internal tags
      And user click in new tag button
      And user types a characters name
      And user click in expand button
      And And user types a characters characters meta title
      And user types a characters cannonical url
      And user types a limit meta description
      And user click in save button
      And user navigates to the tag page
      Then verify tag isnt in the tag list faker
    
    Scenario: Do a login and edit a public tag with limit name
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user types a limit characters name
      And user click in save button
      Then user expect to see error      
      And user navigates to the tag page
    
    Scenario: Do a login and edit a public tag with limit description
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user types a limit characters description
      And user click in save button
      Then user expect to see error
      And user navigates to the tag page

    Scenario: Do a login and edit a public tag with limit slug
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user types a limit characters slug
      And user click in save button
      Then user expect to see error
      And user navigates to the tag page
    
    Scenario: Do a login and edit a public tag with random hex color
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user types a random hex color
      And user click in save button
      Then user expect to see error
      And user navigates to the tag page