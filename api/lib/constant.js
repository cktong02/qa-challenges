const {StatusCodes} = require('http-status-codes');

module.exports = {
    API_ENDPOINTS: {
        GET_CANDLESTICK: '/v2/public/get-candlestick'
    },
    HTTP_STATUS: StatusCodes,
    RETURN_CODE: {
        OK: 0,
        INVALID_INPUT: 10004
    }
}