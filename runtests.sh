#!/bin/bash

echo "Server side Unit Tests"
node_modules/.bin/jasmine-node tests/server/unit/*.js
node_modules/.bin/webdriver-manager update
node_modules/.bin/protractor protractor.conf.js

