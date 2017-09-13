(function(){
	angular.module('primeiraApp').factory('msgs', ['toastr', MsgsFactory])

	function MsgsFactory(toastr) {

		function addMsg(msgs, title, method) {
			if(msgs instanceof Array){
				msgs.forEach(msg=>{
					switch (msg){
						case "O atributo 'year' é obrigatório.":
							msg = "Informe o Ano"
							break
						case "O atributo 'month' é obrigatório.":
							msg = 'Informe o Mês'
							break
						case "O atributo 'name' é obrigatório.":
							msg = "Informe o Nome"
							break
					}
					toastr[method](msg, title)
				})
			}else{
				toastr[method](msgs, title)
			}
		}

		function addSuccess(msgs) {
			addMsg(msgs, 'Sucesso', 'success' )

		}

		function addError(msgs){
			addMsg(msgs, 'Erro', 'error')
		}

		function addWarn(msgs) {
			addMsg(msgs, 'Alerta', 'warning')
		}

		return { addSuccess, addError, addWarn }
	}

	return { MsgsFactory }

})()