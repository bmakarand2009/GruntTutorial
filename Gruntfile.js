'use strict';
module.exports = function(grunt) {
// load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // jshint: {
    //   options: {
    //     jshintrc: '.jshintrc'
    //   },
    //   all: [
    //     'js/*.js',
    //     '!js/src/*.min.js'
    //   ]
    // },

   // compass: {
   //    dev: {
   //      options: {
   //        config: 'config.rb',
   //        force: true
   //      }
   //    }
   //  },

   //Concat

// Concat & minify
    uglify: {
      dev: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> version: <%= pkg.version %> \n author: <%= pkg.author %> */\n',
          mangle: false,
          compress: false,
          preserveComments: 'all',
          beautify: true,
          sourceMap: 'target/js/vendor.default.min.js.map'
        },
        files: {
          'target/js/vendor.default.min.js': [
            'js/otableservice.js',
            'js/themetree.js'
          ]
        }
      },
      dist: {
        options: {
          mangle: true,
          compress: true,
          sourceMap: 'target/js/vendor.default.prod.min.js.map'
        },
        files: {
          'target/js/vendor.default.prod.js': [
            'js/otableservice.js',
            'js/themetree.js'
          ]
        }
      }
    },


    watch: {
        src: {
          files: ['src/*.html', 'js/*.js', 'js/**/*.js','assets/css/*.css', '!assets/js/app.min.js'], // ! means not
          tasks: ['dev'],
        },
    }

  });

  grunt.registerTask('build', [
      'uglify:dist'
  ]);

  grunt.registerTask('dev', [
      'uglify:dev'
  ]);

  grunt.registerTask('default', [
      'watch'
  ]);

  grunt.event.on('watch', function(action, filepath) {
      grunt.log.writeln(filepath + ' has ' + action);
  });
};