const BillingCycle = require('./billingCycle');
const _ = require('lodash');

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidator:true})
BillingCycle.after('post', sendErrorsOrNext)
BillingCycle.after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {

	const bundle = res.locals.bundle

	if(bundle.errors){
		var errors = parseErrors(bundle.errors)
		res.status(500).json({errors})
	}else{
		next()
	}
}

/**
 * @param  {Objeto e erros do pacote bundle do node restful}
 * @return {array de erros}
 */
function parseErrors(nodeRestFulErrors) {

	const errors = []
	//faz um forIn no primeiro parâmetro, o segundo parâmetro é um callback que virá adicionar o campo mensagem do primeiro
	//parâmetro ao array de erros.
	_.forIn(nodeRestFulErrors, error =>errors.push(error.message))
	return errors

}

BillingCycle.route('count', (req, res, next)=>{
	BillingCycle.count((err, value)=>{
		if(err){
			res.status(500).json({errors:[err]})
		}else{
			res.json({value})
		}
	})
})

/**
	TODO:
	- First faz com que ao realizar um updtate o objeto retornado seja o novo. Sem isso o objeto retornado seria o antigo.
	- Second faz com que as validações declaradas no Schema sejam rodadas tbm no update
 */

module.exports = BillingCycle;