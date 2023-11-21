Feature: Google Search

  Scenario: Perform a search on Google
    Given I am on the Google search page
    When I search for google.com
    Then I should see search results
