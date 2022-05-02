
# Web UI Test
> A website UI test against navigation to trade page of ZIL/USDT
 
## Setup

### Pre-requisite
- Install Node.js & npm
```
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
```
- Install npm dependencies at working directory
```
$ npm install
```


## Test execution

### Run tests on command line interface
```
$ npm run test-cli
```

### Run tests on GUI test runner
```
$ npm run test-gui
```
A test runner window would be popped out
Select target browser (Chrome) & click test to be executed (exchange.feature)


## Test design
Tech stack: Cypress with Cucumber BDD style framework
`https://www.npmjs.com/package/cypress-cucumber-preprocessor`

### Test cases
BDD feature spec in `./cypress/integration/feature/exchange.feature`
Step definitions in `./cypress/integration/feature/exchange/exchange.js`
Page objects in `./cypress/support/pageObjects`
 
### Environment config
Environment dependent configurations e.g. site base url are stored under `./config` e.g. `prod.json`
Change target env by adding argument `--config-file ./config/[env].json` in npm test command