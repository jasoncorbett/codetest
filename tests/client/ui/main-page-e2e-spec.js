
var pages = require('../pages');

describe("Simple App Main Page", function() {
    var main = new pages.MainPage();

    it("should not have any message when initially loaded", function() {
        main.get();
        expect(main.echoOutput.getText()).toEqual('');
    });

    it("should echo back whatever is submitted", function() {
        main.get();
        main.echoInput.click();
        main.echoInput.sendKeys("Some Random String");
        main.echoSubmit.click();
        expect(main.echoOutput.getText()).toEqual('Some Random String');
    });
});