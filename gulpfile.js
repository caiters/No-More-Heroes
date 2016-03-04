var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

gulp.task('css', function(){
  var cssSrc = 'css/**/*.scss',
      cssDest = 'css';
  gulp.src(cssSrc, {base: 'css/sass'})
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(cssnano())
    .pipe(sourcemaps.write('maps'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());
});

gulp.task('connect', function(){
  connect.server({
    root: './'
  })
});

gulp.task('html', function(){
  gulp.src('./*.html')
    .pipe(livereload());
});

gulp.task('js', function(){
  gulp.src('scripts/*.js')
    .pipe(livereload());
});

gulp.task('watch:html', function(){
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('watch:js', function(){
  gulp.watch(['scripts/*.js'], ['js']);
});

gulp.task('watch:css', function(){
  livereload.listen();
  gulp.watch(['css/**/*.scss'], ['css']);
});

gulp.task('default', ['watch:css', 'connect', 'watch:html', 'watch:js']);
