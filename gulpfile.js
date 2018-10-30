// including plugins
var gulp = require('gulp')
var del = require('del')
var rename = require('gulp-rename')

const schemaPlugin = require('./schema-generator-gulp-plugin');

var paths = {
  raw: {
    src: 'raw_data/**.txt',
    dest: 'assets/'
  }
};


// gulp.task('copy', function() {
//   gulp.src('currentVisit.txt')
//   .pipe(schemaPlugin())
//   .pipe(gulp.dest('assets'))
// });


/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'assets' ]);
}

function scripts() {
  return gulp.src(paths.raw.src)
  .pipe(schemaPlugin())
  .pipe(rename({
    //basename: 'main',
    extname: '.json'
  }))
  .pipe(gulp.dest(paths.raw.dest));
  //.pipe(gulp.dest('assets'))
  // return gulp.src(paths.scripts.src, { sourcemaps: true })
  // .pipe(babel())
  // .pipe(uglify())
  // .pipe(concat('main.min.js'))
  // .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
}
exports.watch = watch;
/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, scripts);

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
