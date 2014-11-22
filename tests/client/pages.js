
module.exports = {
    MainPage: function() {
        this.courses = element.all(by.repeater('course in courses'));

        this.get = function() {
            browser.get('http://localhost:3000/');
        };

        this.course = function(num) {
            return this.courses.get(num).element(by.css('.clickable'));
        }
    },
    CoursePage: function() {
        this.name = element(by.binding('course.name'));
        this.code = element(by.binding('course.code'));
        this.description = element(by.binding('course.description'));
        this.name = element(by.binding('course.name'));
        this.notFoundMessage = element(by.id('course-not-found-message'));

        this.get = function(courseid) {
            browser.get('http://localhost:3000/course/' + courseid);
        };
    }
};