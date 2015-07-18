var gulp = require('gulp');
var optmize = require('gulp-requirejs-optimize');

gulp.task('scripts', function () {

    gulp.src('src/js/main.js')
        .pipe(optmize({
            paths: {
                jquery: 'lib/jquery-2.1.4.min'
            }
        }))
        .pipe(gulp.dest('src/js/build/'));
});

gulp.task('default', ['scripts']);