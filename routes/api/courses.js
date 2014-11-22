
var request = require('request');

var self = {
    request: request,
    token: "",
    getNewToken: function(callback) {
        self.request.post('http://canvas-api.herokuapp.com/api/v1/tokens', function(error, response, body) {
            if (!error) {
                self.token = JSON.parse(body).token;
            }
            callback();
        })
    },
    ensureToken: function(callback) {
        numOfTries = 0;
        var response = function() {
            if(self.token !== "") {
                callback();
            } else if (++numOfTries >= 3) {
                throw "Tried 3 times to get token and failed"
            } else {
                self.getNewToken(response);
            }
        };
        self.getNewToken(response);
    },
    getCourses: function(req, res) {
        self.ensureToken(function() {
            self.request.get({url: 'http://canvas-api.herokuapp.com/api/v1/courses', headers: {'Authorization': 'Token ' + self.token}, qs: req.query}, function(error, response, body) {
                if(!error) {
                    try {
                        res.send(JSON.parse(body));
                    } catch(e) {
                        res.send([]);
                    }

                } else {
                    console.log(error);
                    res.send([]);
                }
            });
        });
    },
    getCourse: function(req, res) {
        self.ensureToken(function() {
            self.request.get({url: 'http://canvas-api.herokuapp.com/api/v1/courses/' + req.params.id, headers: {'Authorization': 'Token ' + self.token}}, function(error, response, body) {
                if(!error) {
                    try {
                        res.send(JSON.parse(body));
                    } catch(e) {
                        res.send({});
                    }

                } else {
                    console.log(error);
                    res.send({});
                }
            });
        });
    }

};

module.exports = self;
