const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

function compileSass() {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('App.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/'));
}

gulp.task('sass', compileSass);
