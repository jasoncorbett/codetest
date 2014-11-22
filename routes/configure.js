
var index = require('./index');
var echo = require('./api/echo');

module.exports = {
    setup: function(app) {
        app.get('/', index.defaultPage);
        app.post('/api/echo', echo.echoResponse);
        app.get('*', index.defaultPage);
    }
};