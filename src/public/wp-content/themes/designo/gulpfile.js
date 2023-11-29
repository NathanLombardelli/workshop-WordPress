'use strict';
const

  // source and build folders
  dir = {
    src         : 'src/',
    build       : '/src/public/wp-content/themes/designo/'
  },

  // Gulp and plugins
  gulp          = require('gulp'),
  gutil         = require('gulp-util'),
  newer         = require('gulp-newer'),
  imagemin      = require('gulp-imagemin'),
  sass          = require('gulp-sass'),
  postcss       = require('gulp-postcss'),
  deporder      = require('gulp-deporder'),
  concat        = require('gulp-concat'),
  stripdebug    = require('gulp-strip-debug'),
  uglify        = require('gulp-uglify')
;
// Browser-sync
var browsersync = false;
// PHP settings
const php = {
  src           : dir.src + '/**/*.php',
  build         : dir.build
};
// copy PHP files
gulp.task('php', () => {
  return gulp.src(php.src)
    .pipe(newer(php.build))
    .pipe(gulp.dest(php.build));
});

//Read more on https://kontra.agency/modern-wordpress-theme-development-with-gulp-js-a-guide/