///<reference path="typings/gulp/gulp.d.ts"/>

import gulp = require("gulp");
var browserify = require("gulp-browserify");

gulp.task("build", () => {
  gulp.src("js/***")
  .pipe(browserify())
  .pipe(gulp.dest("build"))
});

gulp.task("default", ["build"]);