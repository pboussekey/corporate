var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins

gulp.task('style', function () {
  return gulp.src("style.less")
    .pipe(plugins.less())  
    .pipe(plugins.csscomb())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(gulp.dest(""));
});




// Tâche "watch" = je surveille *less
gulp.task('watch', function () {
    gulp.watch('style.less', ['style']);
});

// Tâche "build"
gulp.task('default', ['style','watch']);