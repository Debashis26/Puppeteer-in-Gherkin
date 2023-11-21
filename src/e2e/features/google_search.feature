Feature: Google Search

  Scenario: Perform a search on Google
    Given I am on the Google search page
    When I search for "debashisbadajena"
    Then I should see search results
