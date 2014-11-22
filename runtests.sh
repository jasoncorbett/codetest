#!/bin/bash

echo "##############################################################"
echo "# Server side Unit Tests"
echo "##############################################################"
echo
node_modules/.bin/jasmine-node tests/server/unit/*.js

echo
echo
echo "##############################################################"
echo "# Server side Integration Tests"
echo "##############################################################"
echo
node_modules/.bin/jasmine-node tests/server/integration/*.js

echo
echo
echo "##############################################################"
echo "# Client side UI Tests"
echo "##############################################################"
echo
node_modules/.bin/webdriver-manager update
node_modules/.bin/protractor protractor.conf.js

