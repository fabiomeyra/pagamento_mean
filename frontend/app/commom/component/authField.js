(function(){
	angular.module('primeiraApp').component('authField',{
		bindings: {
			id: '@',
			label:'@',
			type: '@',
			grid:'@',
			icon: '@',
			model: '=',
			placeholder: '@',
			hide:'<'
		},
		controller:  function(){
			this.$onInit = function (){
				this.iconClasses = `glyphicon glyphicon-${this.icon} form-control-feedback`
			}
		},
		template : `
		<div class="form-group has-feedback" ng-hide='$ctrl.hide'>
        	<input ng-model="$ctrl.model" id="{{ $ctrl.id }}" type="{{$ctrl.type}}" class="form-control" placeholder="{{$ctrl.placeholder}}">
        	<span class="{{$ctrl.iconClasses}}"></span>
      	</div>

		`
	}
	)
}
)()