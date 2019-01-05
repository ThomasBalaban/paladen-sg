var gulp = require('gulp');
var run = require('gulp-run');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var buildKss = gulp.task('buildKss', function () {
  var cssHandlers = [
    autoprefixer
  ];

  gulp.src('./pa-lottery-styleguide-shell/kss-assets/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(cssHandlers))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('./pa-lottery-styleguide-shell/kss-assets'))
    .pipe(gulp.dest('./styleguide/kss-assets/'));
});

var buildStyles = gulp.task('buildStyles', function () {
  var cssHandlers = [
    autoprefixer
  ];

  gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(cssHandlers))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('./styleguide/styles/'));
});

var buildImg = gulp.task('buildImg', function() {
    gulp.src('./src/img/**/*.{gif,jpg,png,svg}')
        .pipe(gulp.dest('./styleguide/PaLotteryWebsite/media/Page-Images/'));
});

var buildJS = gulp.task('buildJS', function () {
  return run('npm run build-js').exec();
});

var buildComp = gulp.task('buildComp', function () {
  return run('npm run build-comp').exec();
});

gulp.task('default', ['buildKss', 'buildStyles', 'buildJS', 'buildComp', 'buildImg'], function () {

  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./styleguide/"
    }
  });

  gulp.watch('./pa-lottery-styleguide-shell/kss-assets/*.scss', ['buildKss']).on('change', browserSync.reload);
  gulp.watch('./src/scss/**/*.scss', ['buildStyles']).on('change', browserSync.reload);
  gulp.watch('src/img/**/**', ['buildImg']);
  gulp.watch('./src/js/**/*.js', ['buildJS']);
  gulp.watch('./src/components/**', ['buildComp']);
  gulp.watch('./src/homepage.md', ['buildComp']);
});
