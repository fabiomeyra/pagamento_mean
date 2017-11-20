(function(){

	angular.module('primeiraApp').controller('AuthCtrl', [
		'$location',
		'msgs',
		'auth',
		 AuthController
	])

	function AuthController($location, msgs, auth) {
		const vm = this

		vm.loginMode = true

		vm.changeMode = ()=> vm.loginMode = !vm.loginMode

		vm.getUser = () => (auth.getUser())

		vm.logout = () => auth.logout(() => {
			console.log('chamou a callback do logout')
			$location.path('/')
		})

		vm.login = () => auth.login(vm.user, err => err ? msgs.addError(err) : $location.path('/'))

		vm.signup = () => auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('/'))
	}
})()
