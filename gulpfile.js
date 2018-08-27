var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var image = require('gulp-image');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var purgecss = require('gulp-purgecss')
var gulpRemoveHtml = require('gulp-remove-html');
var gulp = require('gulp');
var gm = require('gulp-gm');
var rename = require("gulp-rename");

// Dist Build

// Images

gulp.task('images', function() {
    gulp.src('src/img/**')
        .pipe(gm(function (gmresize) {
            return gmresize.trim();
        }))
        .pipe(image())
        .pipe(gulp.dest('dist/img'));
});

// Script File

gulp.task('scripts', function() {
    gulp.src('src/scripts/*.js')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

// Log gulp

gulp.task('log', function() {
    gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
    gulp.src('src/stylesheets/*.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

// Live Server

gulp.task('connect', function() {
    connect.server({
        root: 'dist/',
        name: 'Dist App',
        root: 'dist',
        port: 8001,
        livereload: true
    })
});

// Pug
//
gulp.task('html', function() {
    gulp.src('src/views/*.html')
   .pipe(gulp.dest('dist'))
   .pipe(connect.reload());
});

// Watch Files

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/stylesheets/*.scss', ['sass']);
    gulp.watch('src/img/*', ['images']);
    gulp.watch('src/scripts/*', ['scripts']);
});


// Carthook Build

gulp.task('carthook-html', function() {
    gulp.src('src/views/*.html')
        .pipe(gulpRemoveHtml())
        .pipe(htmlmin({collapseWhitespace: true, minifyJS:true,}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('carthook'))
});

gulp.task('carthook-scripts', function() {
    gulp.src('src/scripts/carthook.js')
        .pipe(gulp.dest('carthook'))
});

gulp.task('carthook-sass', function() {
    gulp.src('src/stylesheets/*.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('carthook'))
});

// Run tasks

gulp.task('default', ['html', 'scripts', 'sass', 'connect', 'watch', 'images']);
gulp.task('carthook', ['carthook-html', 'carthook-scripts', 'carthook-sass']);
