const gulp = require('gulp');
const util = require('gulp-util');

require('./gulpTasks/app');
require('./gulpTasks/deps');
require('./gulpTasks/server');

//task chamada sempre que o camando gulp é rodado
gulp.task('default', ()=>{

	//se ao rodar o camando gulp, a flag --production for passado(vide package.jso), o gulp irá startar as duas tasks passadas caso contrário
	//starta as outras 3 tasks
	if(util.env.production){
		gulp.start('deps', 'app')
	}else{
		gulp.start('deps','app', 'server')
	}
})