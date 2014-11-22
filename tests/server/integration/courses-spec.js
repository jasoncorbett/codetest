'use strict';

var courses = require('../../../routes/api/courses');

describe("api/courses", function() {
    describe("getNewToken", function() {
        it("should replace the token when called", function(done) {
            courses.ensureToken(function() {
                expect(courses.token).toNotEqual("");
                done();
            });
        });
    });

    describe("getCourses", function() {
        var request = {
            qs: {}
        };

        var response = {
            done: null,
            data: null,
            send: function(data) {
                this.data = data;
                if (this.done) {
                    this.done();
                }
            }
        };

        it("should return 2 courses without any parameters", function(done) {
            response.done = function() {
                expect(response.data).toNotBe(null);
                expect(response.data.length).toEqual(2);
                done();
            };
            courses.getCourses(request, response);
        });
    });

    describe("getCourse", function() {
        var request = {
            qs: {},
            params: {
                id: 1
            }
        };

        var response = {
            done: null,
            data: null,
            send: function(data) {
                this.data = data;
                if (this.done) {
                    this.done();
                }
            }
        };

        it('should return the specified course', function(done) {
            response.done = function() {
                expect(response.data.id).toEqual(request.params.id);
                done();
            };
            courses.getCourse(request, response);
        })

    })
});