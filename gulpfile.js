const { src, dest, watch } = require("gulp");
const pug = require("gulp-pug");
const sass = require('gulp-sass')(require('sass'));

function html() {
  return src("src/*.pug")
  .pipe(pug({ pretty: true }))
  .pipe(dest("dist/"));
}

exports.html = html;


function css() {
  return src("src/assets/scss/*.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(dest("./dist/css/"))
}

exports.css = css;
 
exports.watch = function() {
    watch("src/assets/scss/*.scss", css);
    watch("src/*.pug", html);
}