'use strict';
var echo = require('../../../routes/api/echo');

describe("Echo API Endpoint", function() {
    var request = {
        body: {
            someRandomKey: "some random value"
        }
    };

    var response = {
        send: function(data) {
            this.data = data;
        }
    };

    it("should return whatever json it is sent", function() {
        echo.echoResponse(request, response);
        expect(response.data).toBe(request.body);
    });
});