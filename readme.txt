
keywords -
Sample Grunt Tutorial
Simple Grunt Project
Grunt to Concat /uglify with watch

This is a sample grunt project, sample grunt tutorial
to be used as a reference for other projects..

This project allows you to
1. concats otableservice.js and themetree.js 
2. minifies, uglifies it various options
3. creates the js.map file
4. Watches for any changes in the js folder, as soon as it finds a change it will run the grunt task :dev


Outputs the result file in target/vendors.*.min.js

Steps to run the prject
1. clone the project
2. go to folder and npm install -g grunt
3. run grunt dev or grunt build or grunt(to run under the watch mode)
Note: while running under watch mode, any changes to js folder , will automatically trigger grunt:dev

References :
http://moduscreate.com/get-up-and-running-with-grunt-js/
http://www.chapterthree.com/blog/rob-decker/theme-development-grunt-livereload-lint-uglify-oh-my
http://net.tutsplus.com/tutorials/tools-and-tips/source-maps-101/
http://www.bymichaellancaster.com/blog/introduction-to-task-runner-gruntjs/


//Steps for grung
//step 1 - install grunt $ npm install -g grunt
//step 2 - $ npm view grunt version
//step 3 - create package.json manually or better use grunt init
//step 4 - add packages to package.json, e.g "grunt-contrib-uglify": "~0.2.0",
  Note : do not forget to add match-dep package, this allows to install the needed plugins
//step 5 - create Grunt.js and add tasks for uglify, watch etc. also create the profiles like build, defalt
//step 6 -  run npm install //this will install all the plugins
step 7 - run grunt <<task>> or grunt to run the default task