
var pages = require('../pages');

describe("Course Detail Page", function() {
    var course = new pages.CoursePage();

    it("should hide course not found upon valid course", function() {
        course.get(1);
        expect(course.notFoundMessage.isDisplayed()).toBeFalsy();
    });

    it("should display name of course", function() {
        course.get(1);
        expect(course.name.isDisplayed()).toBeTruthy();
    });

    it("should display course code", function() {
        course.get(1);
        expect(course.code.isDisplayed()).toBeTruthy();
    });

    it("should display course description", function() {
        course.get(1);
        expect(course.description.isDisplayed()).toBeTruthy();
    });

    it("should display course not found upon bad course", function() {
        course.get('fodkjslfj');
        expect(course.notFoundMessage.isDisplayed()).toBeTruthy();

    });



});

