module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      build: {
        files: {
          src: ['lib/jquery.filterList.js']
        }
      }
    },
    uglify: {
      build: {
        src  : 'lib/jquery.filterList.js',
        dest : 'dist/jquery.filterList.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify']);
  grunt.registerTask('test', ['jshint']);
};