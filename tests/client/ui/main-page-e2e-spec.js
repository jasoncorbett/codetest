
var pages = require('../pages');

describe("Courses Main Page", function() {
    var main = new pages.MainPage();

    it("should display 2 courses", function() {
        main.get();
        expect(main.courses.count()).toEqual(2);
    });

    it("should take you to a course page when the name is clicked", function() {
        main.get();
        main.course(1).click();
        expect(browser.getLocationAbsUrl()).toContain("course");
    });

});