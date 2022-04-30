export class Trading {
    get loadingView() {
        return cy.get('.e-spinner');
    }

    get tradingPairTitle() {
        return cy.get('.toggle');
    }

    get tradingChart() {
        return cy.get('iframe[title="Financial Chart"]');
    }

    verifyOnCurrentPage(currencyPair) {
        cy.url().should('include', `${Cypress.config().pageUrl.trading}/${currencyPair.replace('/', '_')}`);
        this.loadingView.should('not.be.visible');
        this.tradingPairTitle.contains(currencyPair)
            .should('exist');
        return this;
    }

    verifyChart() {
        this.tradingChart.iframe()
            .find('.chart-gui-wrapper canvas')
            .should('be.visible');
        return this;
    }
}

export default new Trading();