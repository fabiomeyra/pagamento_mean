(function() {
	  angular.module('primeiraApp').factory('auth', [
		  '$http',
		  'consts',
		  AuthFactory
		  ])
	  function AuthFactory($http, consts) {

		function signup(user, callback) {
			  submit('signup', user, callback)
		}
		function login(user, callback) {
			  submit('login', user, callback)
		}
		function submit(url, user, callback) {
			  $http.post(`${consts.oapiUrl}/${url}`, user)
			  .then(resp => {
				  localStorage.setItem(consts.userKey, JSON.stringify(resp.data))
				  $http.defaults.headers.common.Authorization = resp.data.token
				  if (callback) callback(null, resp.data)
			  }, function (resp) {
				  if (callback) callback(resp.data.errors, null)
			  })
		}

		function logout(callback) {
			  localStorage.removeItem(consts.userKey)
			  $http.defaults.headers.common.Authorization = ''
			  if (callback) callback(null)
		}


	let user = null
	function getUser() {
		  if(!user) {
			  user = JSON.parse(localStorage.getItem(consts.userKey))
		  }
		  return user
	}


	  return {login, submit, logout, user, getUser}
  }
})()
