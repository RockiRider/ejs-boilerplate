const {src,dest,watch,series} = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer'),
concat = require('gulp-concat');
const terser = require('gulp-terser');

//SCSS Task
function sassTask(){
    return src('src/resources/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(postcss([autoprefixer(),cssnano()]))
      .pipe(concat('vendor.min.css'))
      .pipe(dest('public/css', { sourcemaps:'.'}))
}


function watchTask(){
    watch(['src/resources/**/*.scss'],series(sassTask));
}

exports.watch = watchTask;
