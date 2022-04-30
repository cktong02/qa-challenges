import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import exchangeMarketPage from '../../../support/pageObjects/ExchangeMarket';
import tradingPage from '../../../support/pageObjects/Trading';

Given('user opens exchange market page', () => {
  if (!exchangeMarketPage.isCurrentPage()) {
    exchangeMarketPage.navigate();
  }
})

When('user trades for {string}', (currencyPair) => {
  const [base, quote] = currencyPair.split('/');
  exchangeMarketPage.filterQuoteCurrency(quote)
    .selectBaseCurrency(base);
})

Then('user lands on {string} trading page', (currencyPair) => {
  tradingPage.verifyOnCurrentPage(currencyPair);
})

Then('there is a trading chart', () => {
  tradingPage.verifyChart();
})