(function(){

	angular.module('primeiraApp')
	.controller('BillingCycleCtrl', ['$http', 'msgs',BillingCycleCtrl ])

	function BillingCycleCtrl($http, msgs) {


		const url = 'http://localhost:3003/api/billingCycles'
		const vm = this

		vm.start = function (){
			vm.billingCycles = {}
			$http.get(url).then(({data})=>{
				console.log(data)

				vm.billingCycles = data
			}, ({data})=>{
				console.log(data)
			})


		}

		vm.create = function (){
			$http.post(url, vm.billingCycle).then(({data})=>{

				vm.billingCycle = {}
				msgs.addSuccess(`Ciclo ${data.name} inserido com sucesso`)

			}, ({data})=>{

				msgs.addError(data.errors)
			})
		}

		vm.start()
	}
})()