'use strict';

describe("api/courses", function() {
    describe("token", function() {
        var courses = require('../../../routes/api/courses');
        it("should have an empty token on startup", function() {
            expect(courses.token).toEqual("");
        });
    });

    /*
    describe("ensureToken", function() {
        var origcourses = require('../../../routes/api/courses');

        beforeEach(function() {
            this.courses = {
                token: "",
                getNewToken: function() {},
                ensureToken: origcourses.ensureToken
            };
            spyOn(this.courses, 'getNewToken');
        });

        it("should call getNewToken 3 times before giving up", function() {
            expect(this.courses.ensureToken).toThrow();
            expect(this.courses.getNewToken).toHaveBeenCalled();
            expect(this.courses.getNewToken.calls.count()).toEqual(3);
        });
    });
    */
});