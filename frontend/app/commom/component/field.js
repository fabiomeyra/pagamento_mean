(function(){

	angular.module('primeiraApp').component('field', {
		bindings:{
			id: '@', //o @ indica que o valor será do tipo string e será imutável
			label: '@',
			grid: '@',
			placeholder: '@',
			type: '@',
			model: '=',
			readonly: '<',
			required: '<'
		},
		controller: [ 'gridSystem', function(gridSystem){

			this.$onInit = ()=>{
				this.gridClasses = gridSystem.toCssClasses(this.grid)
			}

		}
		],
		template: `
			<div class="{{ $ctrl.gridClasses }}">
				<div class="form-group">
					<label for="{{ $ctrl.id }}">{{$ctrl.label}}</label>
					<input id='{{ $ctrl.id }}' class="form-control" required='{{$ctrl.required}}' placeholder="{{ $ctrl.placeholder }}" type='{{ $ctrl.type }}' ng-model='$ctrl.model'
					ng-readonly='$ctrl.readonly'>
				</div>
			</div>
		`
	})
})()