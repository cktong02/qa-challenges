
module.exports = {
    getCandlestick: {
        title: 'valid result',
        type: 'object',
        required: ['instrument_name', 'depth', 'interval', 'data'],
        properties: {
            instrument_name: {
                type: 'string'
            },
            depth: {
                type: 'integer',
                minimum: 1
            },
            interval: {
                type: 'string'
            },
            data: {
                type: ['array', 'null'],
                minItems: 1,
                items: {
                    type: 'object',
                    required: ['t', 'o', 'h', 'l', 'c', 'v'],
                    properties: {
                        t: { //end time
                            type: 'number'
                        },
                        o: { //open
                            type: 'number'
                        },
                        h: { //high
                            type: 'number'
                        },
                        l: { //low
                            type: 'number'
                        },
                        c: { //close
                            type: 'number'
                        },
                        v: { //volume
                            type: 'number'
                        },
                    }
                }
            }
        }
    }
}