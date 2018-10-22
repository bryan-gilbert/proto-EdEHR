// including plugins
var gulp = require('gulp')
var del = require('del')
var rename = require('gulp-rename')
var concat = require('./generators/combine-gulp-plugin');

const schemaPlugin = require('./generators/schema-generator-gulp-plugin')
const navPlugin = require('./generators/nav-generator-gulp-plugin')

var paths = {
  raw: {
    src: 'raw_data/**.txt',
    dest: 'assets/topLevel'
  },
  topSchemas: {
    src: 'assets/topLevel/**.js',
    dest: 'assets/nav'
  }
}

/**
 * Remove generated artifacts
 * @returns {*}
 */
function clean () {
  return del([ 'assets' ])
}

/**
 * Convert raw defs into modules that provide top level schema elements
 * @returns {*}
 */
function schemafy () {
  return gulp.src(paths.raw.src)
    .pipe(schemaPlugin())
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest(paths.raw.dest))
}

// function navify () {
//   return gulp.src(paths.topSchemas.src)
//   .pipe(navPlugin())
//   .pipe(concat('all.js'))
//
//   .pipe(gulp.dest('./assets/'))
//   //.pipe(gulp.dest(paths.topSchemas.dest))
//   // .pipe(rename({ extname: '.js' }))
// }

function watch () {
  gulp.watch(paths.scripts.src, schemafy)
}
exports.watch = watch

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, schemafy)
  //, navify)

/*
 * Use `gulp.task` to expose tasks
 */
gulp.task('build', build)

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build)
