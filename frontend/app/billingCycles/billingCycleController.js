(function(){

	angular.module('primeiraApp')
	.controller('BillingCycleCtrl', ['$http' ,BillingCycleCtrl ])

	function BillingCycleCtrl($http) {
		const vm = this

		vm.create = function (){
			const url = 'http://localhost:3003/api/billingCycles'
			$http.post(url, vm.billingCycle).then((res)=>{

				vm.billingCycle = {}
				console.log('Sucesso!')

			}, (err)=>{
				if (err) console.log(err);
			})
		}
	}
})()