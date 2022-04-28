const chai = require('chai');
const { HTTP_STATUS, RETURN_CODE } = require('../lib/constant');
const schema = require('./schema');
chai.use(require('chai-json-schema-ajv'));
const should = chai.should();

const verifyGetCandlestickOK = function (res, instrumentName, timeframe) {
    res.should.have.status(HTTP_STATUS.OK);
    res.body.code.should.be.equal(RETURN_CODE.OK);
    res.body.result.should.be.jsonSchema(schema.getCandlestick, 'valid result');
    const { instrument_name, interval } = res.body.result;
    instrument_name.should.be.equal(instrumentName);
    interval.should.be.equal(timeframe);
};

module.exports = {
    getCandlestick: {
        verifyOK: verifyGetCandlestickOK,
        verifyBadRequest: (res) => {
            res.should.have.status(HTTP_STATUS.BAD_REQUEST);
        },
        verifyInvalidInput: (res) => {
            res.should.have.status(HTTP_STATUS.OK);
            res.body.code.should.be.equal(RETURN_CODE.INVALID_INPUT);
        },
        verifyEmptyData: (res, instrumentName, timeframe) => {
            verifyGetCandlestickOK(res, instrumentName, timeframe);
            should.not.exist(res.body.result.data);
        }
    }
}