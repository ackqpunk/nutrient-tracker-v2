var gulp = require('gulp');
var less = require('gulp-less');
var typescript = require('gulp-typescript');
const browserSync = require('browser-sync').create();


var libs = './wwwroot/libs/';
var tsProject = typescript.createProject('./wwwroot/tsconfig.json');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('watch', () => {
    gulp.watch('less/*.less', ['less:compile']);
    gulp.watch('wwwroot/**/*.ts', ['typescript:compile']);

    browserSync.init({
        proxy: 'localhost:49759', // IIS express port
        notify: true,
        open: true,
        logLevel: 'debug',

    });

    gulp.watch(['./wwwroot/app/**/*.js', './wwwroot/styles/*.css']).on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', doing page reload!');
        browserSync.reload();
    });
})

gulp.task('less:compile', () => {
    return gulp.src('less/all.less')
        .pipe(less())
        .pipe(gulp.dest('wwwroot/styles/'));
});

gulp.task('typescript:compile', () => {
    var tsResult = gulp.src("wwwroot/**/*.ts") // or tsProject.src() 
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('./wwwroot/.'));
});

gulp.task('restore:core-js', function() {
    gulp.src([
        'node_modules/core-js/client/*.js'
    ]).pipe(gulp.dest(libs + 'core-js'));
});
gulp.task('restore:zone.js', function () {
    gulp.src([
        'node_modules/zone.js/dist/*.js'
    ]).pipe(gulp.dest(libs + 'zone.js'));
});
gulp.task('restore:reflect-metadata', function () {
    gulp.src([
        'node_modules/reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(libs + 'reflect-metadata'));
});
gulp.task('restore:systemjs', function () {
    gulp.src([
        'node_modules/systemjs/dist/*.js'
    ]).pipe(gulp.dest(libs + 'systemjs'));
});
gulp.task('restore:rxjs', function () {
    gulp.src([
        'node_modules/rxjs/**/*.js'
    ]).pipe(gulp.dest(libs + 'rxjs'));
});
gulp.task('restore:angular-in-memory-web-api', function () {
    gulp.src([
        'node_modules/angular-in-memory-web-api/**/*.js'
    ]).pipe(gulp.dest(libs + 'angular-in-memory-web-api'));
});

gulp.task('restore:angular', function () {
    gulp.src([
        'node_modules/@angular/**/*.js'
    ]).pipe(gulp.dest(libs + '@angular'));
});

gulp.task('restore:progress', function () {
    gulp.src([
        'node_modules/@progress/**/*.js'
    ]).pipe(gulp.dest(libs + '@progress'));
});

gulp.task('restore:telerik', function () {
    gulp.src([
        'node_modules/@telerik/**/*.js'
    ]).pipe(gulp.dest(libs + '@telerik'));
});

gulp.task('restore:bootstrap', function () {
    gulp.src([
        'node_modules/bootstrap/dist/**/*.*'
    ]).pipe(gulp.dest(libs + 'bootstrap'));
});

gulp.task('restore:kendo-theme-default', function () {
    gulp.src([
        'node_modules/@progress/kendo-theme-default/dist/*.css'
    ]).pipe(gulp.dest(libs + '@progress/kendo-theme-default'));
});

gulp.task('restore', [
    'restore:core-js',
    'restore:zone.js',
    'restore:reflect-metadata',
    'restore:systemjs',
    'restore:rxjs',
    'restore:angular-in-memory-web-api',
    'restore:angular',
    'restore:bootstrap',
    'restore:progress',
    'restore:tekerik',
    'restore:kendo-theme-default'
]);

