const gulp = require('gulp');
const pugLint = require('gulp-pug-linter');
const eslint = require('gulp-eslint');

gulp.task('lint:js', () => {
  return gulp
    .src(['./**/*.js', '!node_modules/**'], { dot: true })
    .pipe(
      eslint({
        configFile: './.eslintrc.js',
      })
    )
    .pipe(eslint.format());
});

gulp.task('lint:js:fix', () => {
  return gulp
    .src(['./**/*.js', '!node_modules/**'], { dot: true })
    .pipe(
      eslint({
        fix: true,
        configFile: './.eslintrc.js',
      })
    )
    .pipe(eslint.format())
    .pipe(gulp.dest((file) => file.base));
});

gulp.task('lint:pug', () => {
  return gulp.src('views/*.pug').pipe(
    pugLint({
      reporter: 'default',
    })
  );
});

gulp.task('lint', gulp.parallel('lint:pug', 'lint:js'));