Feature: Exchange currencies
  Scenario: Navigate to trading page
    Given user opens exchange market page
    When user trades for "ZIL/USDT"
    Then user lands on "ZIL/USDT" trading page
    And there is a trading chart