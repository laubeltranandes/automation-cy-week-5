@apriori-tag
Feature: Check tag with a-priori-data

  Background:
    Given a priori data should be loaded for tag
    And user navigates to the login page

     Scenario: Do a login and create a public tag with random name ok, description ok and empty another fields
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random valid name
      And user types a random valid description
      And user click in save button
      And user navigates to the tag page
      Then verify tag is in the tag list

      Scenario: Do a login and create a public tag with random name ok, random description ok, random color ok, random ok slug
      When user is logged in the application
      And user navigates to the tag page
      And user click in new tag button
      And user types a random valid name
      And user types a random valid description
      And user types a random valid slug
      And user click in save button
      And user navigates to the tag page
      Then verify tag is in the tag list

      Scenario: Do a login and create a internal tag with random name ok, random description ok, random color ok, random slug ok, random meta title ok
      When user is logged in the application
      And user navigates to the tag page
      And user click to internal tags
      And user click in new tag button
      And user types a random valid name
      And user types a random valid description
      And user types a random valid slug
      And user click in expand button
      And user types a random valid meta title
      And user click in save button
      And user navigates to the tag page
      Then verify tag is in the tag list

      Scenario: Do a login and create a internal tag with random name ok, random meta title ok, Meta Canonical URL ok
      When user is logged in the application
      And user navigates to the tag page
      And user click to internal tags
      And user click in new tag button
      And user types a random valid name
      And user click in expand button
      And user types a random valid meta title
      And user types a random canonical valid url
      And user click in save button
      And user navigates to the tag page
      Then verify tag is in the tag list

      Scenario: Do a login and create a internal tag with random name ok, random meta title ok, Meta Canonical URL ok and Meta Description ok
      When user is logged in the application
      And user navigates to the tag page
      And user click to internal tags
      And user click in new tag button
      And user types a random valid name
      And user click in expand button
      And user types a random valid meta title
      And user types a random canonical valid url
      And user types a random meta valid description
      And user click in save button
      And user navigates to the tag page
      Then verify tag is in the tag list

      Scenario: Do a login and edit a public tag with random invalid name
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user types a random invalid name
      Then user expect to see error
      And user navigates to the tag page

      Scenario: Do a login and edit a public tag with random invalid color
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user types a invalid color
      Then user expect to see color error
      And user navigates to the tag page

      Scenario: Do a login and edit a public tag with random valid color
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user types a valid color
      And click in a save button
      Then verify tag is in the tag list

      Scenario: Do a login and edit a public tag with  random invalid URL canonica
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user click in expand button
      And user types a random canonical invalid url
      Then user expect to see url error
      And user navigates to the tag page

      Scenario: Do a login and edit a public tag with random valid URl
      When user is logged in the application
      And user navigates to the tag page
      And user click in tag item
      And user types a random canonical valid url
      And click in a save button
      And user navigates to the tag page
      Then verify tag is in the tag list
