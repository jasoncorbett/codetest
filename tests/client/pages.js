
module.exports = {
    MainPage: function() {
        this.echoInput = element(by.css('[ng-model="input.message"] input'));
        this.echoOutput = element(by.binding('output.message'));
        this.echoSubmit = element(by.id('main-page-submit'));

        this.get = function() {
            browser.get('http://localhost:3000/');
        };
    }
}