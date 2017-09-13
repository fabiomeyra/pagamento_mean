(function(){

	angular.module('primeiraApp')
	.controller('BillingCycleCtrl', ['$http', '$location','msgs' ,'tabs',BillingCycleCtrl ])

	function BillingCycleCtrl($http, $location, msgs, tabs) {


		const url = 'http://localhost:3003/api/billingCycles'
		const vm = this

		this.url = angular.copy(url)

		vm.refresh = function (refrashPage){

			vm.billingCycle = {credits : [{}], debts : [{}]}
			vm.indexOfSelected = null


			$http.get(`${url}/count`).then(({data}) =>{

				//Math.ceil arredonda para o interio acima, por exemplo 4,5 vira 5.
				vm.pages = Math.ceil(data.value / 10)
				tabs.show(vm, {tabList : true})

			}, ({data})=>{
				msgs.addError(data.erros)
			})

			if(!refrashPage){
				vm.billingCycles = {}

				const page = parseInt($location.search().page) || 1

				//get setado para paginação, onde skip é o número de valores que deve ser pulado e limite o limite por página
				$http.get(`${url}?skip=${(page - 1) * 10}&limit=10`).then(({data})=>{

					vm.billingCycles = data


				}, ({data})=>{
					msgs.addError(data.erros)
				})

			}

			vm.calculateValues()

		}

		vm.create = function (){
			let billingCycle = angular.copy(vm.billingCycle)
			$http.post(url, billingCycle).then(({data})=>{

				vm.billingCycles.push(vm.billingCycle)
				msgs.addSuccess(`Ciclo ${data.name} inserido com sucesso`)
				vm.refresh(true)
			}, ({data})=>{

				msgs.addError(data.errors)
			})

		}

		vm.showTabUpdate = function (billingCycle){
			vm.billingCycle = angular.copy(billingCycle)
			vm.indexOfSelected = vm.billingCycles.indexOf(billingCycle)
			vm.calculateValues()
			tabs.show(vm, {tabUpdate: true})
			if(vm.billingCycle.credits.length < 1) vm.billingCycle.credits = [{}]
			if(vm.billingCycle.debts.length < 1) vm.billingCycle.debts = [{}]


			setTimeout(() => {
			  	document.querySelectorAll('#name #name')[1].focus()

			}, 0);

		}

		vm.update = function(){
			let urlUpdate = url+`/${vm.billingCycle._id}`
			$http.put(urlUpdate, vm.billingCycle).then(({data})=>{
				msgs.addSuccess(`Ciclo "${data.name}" alterado com sucesso`)
				vm.billingCycles.splice(vm.indexOfSelected, 1, data)
				vm.refresh(true)
			}, ({data})=>{

				msgs.addError(data.errors)
			})
		}

		vm.showTabDelete = function (billingCycle){
			vm.billingCycle = angular.copy(billingCycle)
			vm.indexOfSelected = vm.billingCycles.indexOf(billingCycle)
			vm.calculateValues()
			tabs.show(vm, {tabDelete: true})
		}

		vm.delete = function(){
			let urlDelete = url+`/${vm.billingCycle._id}`
			$http.delete(urlDelete).then(({data})=>{
				msgs.addSuccess(`Ciclo "${vm.billingCycle.name}" excluído`)
				vm.billingCycles.splice(vm.indexOfSelected, 1)
				vm.refresh(true)
			}, ({data})=>{

				msgs.addError(data.errors)
			})
		}

		vm.addCredit = function (index){
			vm.billingCycle.credits.splice(index + 1, 0, {})
			vm.calculateValues()
		}

		vm.cloneCredit = function (index, {name, value}){
			vm.billingCycle.credits.splice(index, 0, {name, value})
			vm.calculateValues()
		}

		vm.deleteCredit = function(index){

			if(vm.billingCycle.credits.length > 1){

				vm.billingCycle.credits.splice(index, 1)
				vm.calculateValues()
			}else{
				msgs.addWarn(`Impossível excluir crédito é preciso no mínimo 1 crédito`)
			}
		}

		vm.addDebt = function (index){
			vm.billingCycle.debts.splice(index + 1, 0, {})
			vm.calculateValues()
		}

		vm.cloneDebt = function (index, {name, value}){
			vm.billingCycle.debts.splice(index, 0, {name, value})
			vm.calculateValues()
		}

		vm.deleteDebt= function(index){

			if(vm.billingCycle.debts.length > 1){

				vm.billingCycle.debts.splice(index, 1)
				vm.calculateValues()
			}else{
				msgs.addWarn(`Impossível excluir débito é preciso no mínimo 1 débito`)
			}
		}

		vm.calculateValues = function (){
			vm.credit = 0
			vm.debt = 0

			if(vm.billingCycle){
				vm.billingCycle.credits.forEach(({value}) => {
					vm.credit += !value || isNaN(value) ? 0 : value
				})

				vm.billingCycle.debts.forEach(({value}) => {
					vm.debt += !value || isNaN(value) ? 0 : value
				})
			}

			vm.total = vm.credit - vm.debt

		}

		vm.refresh()
	}
})()