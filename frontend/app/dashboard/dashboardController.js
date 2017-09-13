(function(){
	angular.module('primeiraApp').controller('DashboardCtrl', [
		'$http',
		'consts',
		DashboardController
		])

	function DashboardController($http, consts){

		const vm = this

		vm.getSummary = function(){

			const url = `${consts.apiUrl}/billingSummary`
			$http.get(url).then(response=>{

			//ao receber a resposta da requisição, o método já vai extrair as variáveis credit e debt, assimn não é preciso response.data.credit ou response.data.debt.
			//o valor padrão de ambas caso de nulo é 0
			const {credit = 0, debt = 0} = response.data
			vm.credit = credit
			vm.debt = debt
			vm.total = vm.credit - vm.debt
		}, (error)=>{
			console.log(error)
		})
		}

		vm.getSummary()
	}
})()
