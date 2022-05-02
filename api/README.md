# API Test
> An API test against REST endpoint public/get-candlestick

 
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

### Run tests on UAT environment
```
$ npm run test
```

### Run tests on production env
```
$ NODE_ENV=prod npm run test
```

### Run tests with HTML report
```
$ npm run test-report
```
HTML report would be found in `./api/mochawesome-report/mochawesome.html`


## Test design
Tech stack: Mocha Javascript framework

### Test cases
Found in `./test/restAPI/getCandlestick.js`

 - Positive case: Get candle stick data for `BTC-USDT` & `CRO-USDT`
	 - Data driven approach, test script is reused
	 - Verify HTTP code, value & JSON schema in response data
 - Negative case:
	 - Missing parameter
	 - Incorrect parameter `instrumentName` or `timeframe`
 - Edge case: Non-existing instrument `ABC_USDT`

### Environment config
Environment dependent configurations e.g. endpoint host are stored under `./config` e.g. `prod.json`
Change target env by adding argument `NODE_ENV=[env]` in test command