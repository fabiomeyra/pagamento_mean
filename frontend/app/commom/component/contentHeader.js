(function(){

	angular.module('primeiraApp').component('contentHeader', {
		bindings:{
			name: '@', //o @ indica que o valor será do tipo string e será imutável
			small: '@',
		},
		template: `
		<section class="content-header">
		<h1>{{$ctrl.name}} <small>{{$ctrl.small}}</small></h1>
		</section>
		`
	})
})()