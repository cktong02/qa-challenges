const util = require('../util');
const exchangeMarketUrl = Cypress.config().pageUrl.exchangeMarket;

export class ExchangeMarket {
    get loadingView() {
        return cy.get('.e-spinner');
    }

    currencyTab(currency) {
        return cy.get('.market-title-box').contains(currency);
    }

    instrunctionBaseCurrency(currency) {
        return cy.get('[data-test="instrument-name"] .base').contains(currency);
    }

    isCurrentPage() {
        cy.url().then(url => {
            return url.endsWith(exchangeMarketUrl);
        });
    }

    navigate() {
        cy.visit(exchangeMarketUrl, {
            onBeforeLoad: (contentWindow) => {
                // disable disclaimer pop up
                util.setCookieToContentWindow(contentWindow, 'crypto.disclaimer', 'true');
            }
        });
        this.loadingView.should('not.be.visible');
        return this;
    }

    filterQuoteCurrency(currency) {
        // force clicking the tab covered by another element
        this.currencyTab(currency).click({
            force: true,
            waitForAnimations: false
        });
        return this;
    }

    selectBaseCurrency(currency) {
        this.instrunctionBaseCurrency(currency).click();
        return this;
    }
}

export default new ExchangeMarket();