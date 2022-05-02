const dataDriven = require('data-driven')
const restAPI = require('../../request/restAPI');
const assert = require('../../assert/restAPI').getCandlestick;

describe('REST API v2', function () {
  describe('GET public/get-candlestick', function () {
    dataDriven([
      { instrumentName: 'BTC_USDT', timeframe: '1m' },
      { instrumentName: 'CRO_USDT', timeframe: '30m' },
    ], function () {
      it('should return candle stick data', async function ({ instrumentName, timeframe }) {
        const res = await restAPI.getCandlestick({ instrumentName, timeframe });
        assert.verifyOK(res, instrumentName, timeframe);
      });
    });

    describe('when parameters are missing', function () {
      it('should return bad request', async function () {
        const res = await restAPI.getCandlestick({});
        assert.verifyBadRequest(res);
      });
    });

    describe('when parameters are invalid', function () {
      dataDriven([
        { instrumentName: 'BTC_USDT', timeframe: '0m' },
        { instrumentName: '', timeframe: '15m' },
      ], function () {
        it('should return invalid input error', async function ({ instrumentName, timeframe }) {
          const res = await restAPI.getCandlestick({ instrumentName, timeframe });
          assert.verifyInvalidInput(res);
        });
      });
    });

    describe('when instrument is not ready', function () {
      const instrumentName = 'ABC_USDT';
      const timeframe = '1m';
      it('should return empty data', async function () {
        const res = await restAPI.getCandlestick({ instrumentName, timeframe });
        assert.verifyEmptyData(res, instrumentName, timeframe);
      });
    });
  });
});