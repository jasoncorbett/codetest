
var index = require('./index');
var courses = require('./api/courses');

module.exports = {
    setup: function(app) {
        app.get('/', index.defaultPage);
        app.get('/api/courses', courses.getCourses);
        app.get('/api/courses/:id', courses.getCourse);
        app.get('*', index.defaultPage);
    }
};