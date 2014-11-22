Codetest
========

Here is my implementation, it should work fairly well on the newest web browsers and mobile devices.

To Run Server
-------------

This is a nodejs web app.  On a mac or linux system you will need to install nodejs, npm (which usually comes with nodejs), and then using npm install bower.
For more info look at http://nodejs.org and http://www.npmjs.org.

After that you can initialize the required dependencies by running the commands:

    npm install
    bower install

Now you should be able to run the server by:

    bin/www

To Run Tests
------------

To run the tests you can use the provided shell script.  It runs several sets of tests.

    ./runtests.sh

The tests are located in the tests sub directories and are separated according to first where they run, then their
type.  The type being unit tests, or ui tests.  The UI tests are end to end.  
