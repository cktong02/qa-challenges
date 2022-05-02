Feature: Weather forecast

Scenario: Tomorrow weather forecast from 9-day forecast
    Given user opens home page
    When user checks 9-day weather forecast
    Then there is tomorrow forecast
