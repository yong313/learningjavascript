const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function(done) {
  // 노드 소스
  gulp.src("es6/**/*.js")
    .pipe(babel({
      presets: ['@babel/preset-env']
  }))
  .pipe(gulp.dest("dist"));

  // 브라우저 소스
  gulp.src("public/es6/**/*.js")
    .pipe(babel({
      presets: ['@babel/preset-env']
  }))
  .pipe(gulp.dest("public/dist"));
  
  done();
})