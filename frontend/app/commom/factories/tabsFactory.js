(function(){
	angular.module('primeiraApp').factory('tabs', [TabsFactory])

	function TabsFactory(){

		function show(owner, {
			tabCreate = false,
			tabUpdate = false,
			tabDelete = false,
			tabList = false
		}) {

			owner.tabCreate = tabCreate
			owner.tabUpdate = tabUpdate
			owner.tabDelete = tabDelete
			owner.tabList = tabList

		}


		return {show}
	}
}
)()