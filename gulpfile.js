const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');


function compileSass() {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('App.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/'));
}

function watch() {
    gulp.watch('src/**/*.scss', compileSass)
}

gulp.task('sass', compileSass);
gulp.task('default', compileSass);

exports.watch = watch;