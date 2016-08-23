/*
 * Generated on 2016-07-14
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2016 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    src: 'src',
    dist: 'dist',
    cwd: {
      assemble: {
        pages: ['**/*.hbs']
      }
    }
  };

  // Project configuration.
  grunt.initConfig({

    config: config,

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/**/*.{md,hbs,yml}'],
        tasks: ['assemble:pages']
      },

      compass: {
        files: ['<%= config.src %>/assets/sass/**/*.{scss,sass}'],
        tasks: ['compass']
      },

      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },

      scripts: {
        files: ['<%= config.src %>/assets/**/*.js'],
        tasks: ['copy:main']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/**/*.*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: {
        files: [{
          src: [
            '<%= config.dist %>/**/*.*'
          ]
        }]
      }
    },

    browserSync: {
      options: {
        notify: false,
        background: true,
        watchOptions: {
          ignored: ''
        }
      },
      livereload: {
        options: {
          port: 9000,
          files: [
            '<%= config.dist %>/*.html',
            '<%= config.dist %>/assets/**/*.css',
            '<%= config.dist %>/assets/**/*.js',
            '<%= config.dist %>/assets/**/*.{png,jpg,jpeg,gif,webp,svg}'
          ],
          server: {
            baseDir: ['<%= config.dist %>', config.src],
            routes: {
              '/bower_components': './bower_components'
            }
          }
        }
      },
      dist: {
        options: {
          background: false,
          server: '<%= config.dist %>'
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: false,
          expand: true,
          assets: '<%= config.dist %>/assets',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: [
          {
            expand: true, 
            cwd: '<%= config.src %>/templates/pages/', 
            src: config.cwd.assemble.pages, 
            dest: '<%= config.dist %>/', 
            ext: '.html'
          }
        ]
      },
      dist: {
        options: {
          flatten: false,
          expand: true,
          assets: '<%= config.dist %>/assets',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: [
          {
            expand: true, 
            cwd: '<%= config.src %>/templates/pages/', 
            src: ['**/*.hbs'], 
            dest: '<%= config.dist %>/', 
            ext: '.html'
          }
        ]
      },
      options: {
        layout: 'default-layout.hbs',
        layoutdir: '<%= config.src %>/templates/layouts'
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= config.src %>/assets/sass',
        cssDir: '<%= config.dist %>/assets/styles',
        imagesDir: '<%= config.src %>/assets/images',
        javascriptsDir: '<%= config.src %>/assets/scripts',
        fontsDir: '<%= config.src %>/assets/fonts',
        importPath: '.',
        relativeAssets: false
      },
      dist: {
        options: {
          config: 'compass.rb',
          force: false
        }
      },
      server: {
        options: {
          force: false
        }
      }
    },

    // Automatically inject Bower components into layout files
    wiredep: {
      task: {
        src: ['<%= config.src %>/**/*.hbs'],
        ignorePath: /^(\.\.\/)*\.\./
      },
      compass: {
        src: ['<%= config.src %>/assets/sass/**/*.{scss,sass}'],
        ignorePath: /^(\.\.\/)+/
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>',
        blockReplacements: {
            base: function (block) {
                return ['<base href="', block.dest, '">'].join('');
            }
        }
      },
      html: '<%= config.src %>/templates/layouts/**/*.hbs'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: [
          '<%= config.dist %>/assets/styles'
        ],
        blockReplacements: {
            base: function (block) {
                return ['<base href="', block.dest, '">'].join('');
            }
        }
      },
      html: [
        '<%= config.dist %>/*.html'
      ],
      css: ['<%= config.dist %>/assets/**/*.css']
    },

    uglify: {
      dist: {}
    },

    concat: {
      dist: {}
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.src %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'assets/**/*.*',
            '!assets/styles/**',
            '!assets/sass/**'
          ]
        },
        {
          expand: true,
          dot: true,
          cwd: '.',
          src: './bower_components/chosen/*',
          dest: '<%= config.dist %>'
        }]
      },
      main: {
        expand: true,
        cwd: '.tmp/concat/',
        dest: '<%= config.dist %>',
        src: 'assets/**/*.js'
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'compass'
      ],
      dist: [
        'compass'
      ]
    }

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('serve', 'start the server and preview your app', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'useminPrepare',
      'concurrent:server',
      'concat',
      'uglify',
      'copy:dist',
      'assemble:pages',
      'browserSync:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'uglify',
    'copy:dist',
    'assemble:dist',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};