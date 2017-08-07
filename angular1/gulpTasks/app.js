const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

gulp.task('app.html', ()=>{
	gulp.src('app/**/*.html') //minifica todos os arquivos .hmtl que existirem na pasta app e em suas subpastas
	.pipe(htmlmin({collapseWhitespace :  true}))
	.pipe(gulp.dest('public')) //joga os arquivos dentro de public seguindo a three de pastas de dentro de app
})

gulp.task('app.css', ()=>{
	gulp.src('app/**/*.css')
	.pipe(uglifycss({"uglyComments" : true}))
	.pipe(concat('app.min.css'))
	.pipe(gulp.dest('public/assets/css'))
})

gulp.task('app.js', ()=>{
	gulp.src('app/**/*.js')
	.pipe(babel({presets: ['es2015']})) //realiza um parse das funcionalidades novas do js para a versão mais antiga, para que todos os navegadores suportem.
	.pipe(uglify())
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets', ()=>{
	gulp.src('assets/**/*.*')
	.pipe(gulp.dest('public/assets'))
})