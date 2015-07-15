module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          hostname: '*',
          //keepalive: true
        }
      }
    },
    jshint: {
      all: ['src/*.js', 'demo/*.html'],
      options : {
        'extract': 'auto',
        "node": true,
        "browser": true,
        "devel": true,
        "curly": true,
        "bitwise": true,
        "eqeqeq": true,
        "forin": true,
        "freeze": true,
        "funcscope": true,
        "futurehostile": true,
        "latedef": true,
        "nocomma": true,
        "nonbsp": true,
        "notypeof": true,
        "shadow": true,
        "undef": true,
        "singleGroups": true,
        "unused": true,
        "nonew": true,
        "strict": true
      }
    },
    browserify: {
        app: {
            options: {
                //debug: true,
                external: [
                ],
                browserifyOptions: {
                  debug: true
                }
            },
            src: "src/**/*.js",
            dest: "dist/main.js"
        }
    },
    watch: {
        browserify: {
            files: [
                "src/*.js"
            ],
            tasks: ["browserify:app"]
        }
    },
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['jshint', 'browserify', 'connect', 'watch']);
  grunt.registerTask('server', ['jshint', 'connect', 'browserify', 'watch']);
};
