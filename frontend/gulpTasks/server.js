const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver');



//faz o servicor olhar para pasta public e servir os arquivos contidos nela
gulp.task('server', ['watch'], ()=>{

	gulp.src('public').pipe(webserver({
		livereload: true, //faz com q o navegador realize um reload sempre que um arquivo mudar
		port: 3000,
		open: true //abre o navegador ao iniciar o serviço
	}))

})

gulp.task('watch', ()=>{
	watch('app/**/*.html', () => gulp.start('app.html'))//chama app.html do gulp qdo qqr arquivo html da pasta app sofrer alterações
	watch('app/**/*.css', ()=> gulp.start('app.css'))
	watch('app/**/*.js', ()=> gulp.start('app.js'))
	watch('app/**/*.assets', ()=> gulp.start('app.assets'))

})
