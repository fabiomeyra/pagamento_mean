const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])


gulp.task('deps.js', ()=>{
	gulp.src([
		'node_modules/angular/angular.min.js',
		'node_modules/angular-ui-router/release/angular-ui-router.min.js',
		'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js'
		'node_modules/angular-animate/angular-animate.min.js',
		'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
		'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
		'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
		'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
		'node_modules/admin-lte/dist/js/app.min.js'
	])
	.pipe(uglify()) /*vai minificar o arquivo renomeando variáveis, removendo espaços em branco e outros mais.*/
	.pipe(concat('deps.min.js')) //junta todos os arquivos em um só, o arquivo terá o nome que for passado no parâmetro.
	.pipe(gulp.dest('public/assets/js')) //joga esse arquivo no caminho passado como parâmetro
})

gulp.task('deps.css', ()=>{

})

gulp.task('deps.fonts', ()=>{

})