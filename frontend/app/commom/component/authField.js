(function(){
	angular.module('primeiraApp').component('authField',{
		bindings: {
			id: '@',
			label:'@',
			type: '@',
			grid:'@',
			icon: '@',
			model: '=',
			paraceholder: '@',
			hide:'<'
		},
		controller:  function(){
			this.$onInit = function (){
				this.iconClasses = `glyphicon glyphicon-${this.icon} form-controlfeedback`
			}
		},
		template : `
		<div class="form-group has-feedback">
		  		<input ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="formcontrol" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}"
		  		ng-hide="$ctrl.hide" />
		  <span class="{{ $ctrl.iconClasses }}"></span>
		</div>

		`
	}
	)
}
)()