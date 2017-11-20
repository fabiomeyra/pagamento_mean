(function(){
	angular.module('primeiraApp').config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider.state('dashboard', {
				url:"/dashboard",
				templateUrl: "/dashboard/dashboard.html"
			}).state('billingCycles', {
				url: "/billingCycles?page",
				templateUrl: "/billingCycles/tabs.html"
			})

			//$urlRouterProvider.otherwise('/dashboard')
		}
		])
		.run([
			'$rootScope',
			'$http',
			'$location',
			'$window',
			'auth',
			function ($rootScope, $http, $location, $window, auth){
				validateUser()
				$rootScope.$on('$locationChangeStart', ()=> validateUser())

				function validateUser() {

					const user = auth.getUser()
					const authPage = '/auth.html'
					const isAuthPage = $window.location.href.includes(authPage)

					if(!user && !isAuthPage){
						$window.location.href = authPage
					} else if(user && !user.isValid){


						auth.validateToken(user.token, (err, valid)=>{
							if(!valid) $window.location.href = authPage
						})

						user.valid = true
						$http.defaults.headers.common.Authorization = user.token
						if(isAuthPage) $window.location.href = '/#!/dashboard'



					}
				}
			}


		])

})()