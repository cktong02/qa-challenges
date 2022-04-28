const config = require('config');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { API_ENDPOINTS } = require('../lib/constant');

chai.use(chaiHttp);

module.exports.getCandlestick = async ({instrumentName, timeframe}) =>
    chai.request(`https://${config.get('RestAPI.host')}`)
        .get(API_ENDPOINTS.GET_CANDLESTICK)
        .query({
            instrument_name: instrumentName,
            timeframe
        });