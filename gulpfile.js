// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
const runSequence = require('run-sequence');
const del = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sysBuilder = require('systemjs-builder');
const colors  = require('colors');
const rename = require( 'gulp-rename' );


// create a default task and just log a message
gulp.task('default', function(callback) {
    runSequence('clean:public','copy' , callback);
   // runSequence('copyHtml' , callback);
    return gutil.log('Gulp is running!')
});
// clean public
gulp.task('clean:public', function () {
    return del('public/*');
});

gulp.task('copy', function (callback) {
    runSequence('copyHtml','copyLib' , callback);
});


gulp.task('copyHtml',['clean:public'], function() {
    // copy any html files in source/ to public/
    gutil.log('Gulp is running 00!')
  return   gulp.src('app/**/*.html').pipe(gulp.dest('public/app'));
});

gulp.task('copyIndexHtml', function() {
    // copy any html files in source/ to public/
    gutil.log('copyIndexHtml')
    return   gulp.src('index.prod.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('public'));
});


gulp.task('copyLib',['clean:public'], function(callback) {
    runSequence('copyHtml', 'copy:libs','bundle:js', callback);
});

// Copy dependencies
gulp.task('copy:libs', function() {
    gulp.src(['node_modules/rxjs/**/*'])
        .pipe(gulp.dest('public/lib/js/rxjs'));

    // concatenate non-angular2 libs, shims & systemjs-config
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-promise/dist/es6-promise.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        // 'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'systemjs.config.js',
    ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/lib/js'));

    // copy source maps
    gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ]).pipe(gulp.dest('public/lib/js'));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.*'
    ]).pipe(gulp.dest('public/lib/css'));

    return gulp.src(['node_modules/@angular/**/*'])
        .pipe(gulp.dest('public/lib/js/@angular'));
});

gulp.task('bundle:js', function() {
    var builder = new sysBuilder('.', './systemjs.config.js');
    return builder.buildStatic('app', 'public/dist/js/app.min.js')
        .then(function () {
            return del(['public/dist/js/**/*', '!public/dist/js/app.min.js']);
        })
        .catch(function(err) {
            console.error('>>> [systemjs-builder] Bundling failed'.bold.red, err);
        });
});

// Minify JS bundle
gulp.task('minify:js', function() {
    return gulp
        .src('public/dist/js/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'));
});