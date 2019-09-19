(function() {
  'use strict';

  const gulp = require('gulp');
  const pkg = require('../package.json');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('styles', function() {
    return gulp
      .src('src/*.scss')
      .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
      .pipe(gulp.dest('dist'))
      .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
      .pipe(
        $.rename({
          extname: '.min.css'
        })
      )
      .pipe(gulp.dest('dist'));
  });
})();
