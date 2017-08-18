angular.module('primeiraApp').component('valueBox', {

	bindings: {
		grid: '@',
		colorClass:  '@',
		value:'@',
		description: '@',
		iconClass: '@'
	},
	controller: ['gridSystem','$scope', function(gridSystem, scope){


			//sem o $onInit o calor do grid não estava sendo passado.
			this.$onInit = ()=>{
				//controler importa a factory gridSystem criada na pasta factories e faz o pré-processamento dos dados
				//criando a variável gridClasses, que será usada no bind do template
				this.gridClasses = gridSystem.toCssClasses(this.grid)
			}
		}
	],
	template: `
	<div class="{{ $ctrl.gridClasses }}">
		<div class="small-box {{ $ctrl.colorClass }}">
			<div class="inner">
				<h3>{{ $ctrl.value }}</h3>
				<p>{{ $ctrl.description }}</p>
			</div>

			<div class="icon">
				<i class="fa {{ $ctrl.iconClass }}"></i>
			</div>
		</div>
	</div>
	`
})