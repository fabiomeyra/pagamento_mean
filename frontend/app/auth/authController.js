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

		vm.chageMode = ()=> vm.loginMode = !vm.loginMode

		vm.getUser = () => (auth.getUser())

		vm.logout = () => auth.logout(() => msgs.addSuccess('Sucesso!'))


		vm.login = () => auth.login(vm.user, err => err ? msgs.addError(err) : msgs.addSuccess('Sucesso!'))

		vm.signup = () => auth.signup(vm.user, err => err ? msgs.addError(err) : msgs.addSuccess('Sucesso!'))

	}
})()
