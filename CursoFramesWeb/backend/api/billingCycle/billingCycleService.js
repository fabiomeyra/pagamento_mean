const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete'])

/*BillingCycle.rout('count', (req, res, next)=>{
	BillingCycle.count((err, value)=>{
		if(err){
			res.status(500).json({errors:[err]})
		}
	})
})*/

/**
	TODO:
	- First faz com que ao realizar um updtate o objeto retornado seja o novo. Sem isso o objeto retornado seria o antigo.
	- Second faz com que as validações declaradas no Schema sejam rodadas tbm no update
 */

BillingCycle.updateOptions({new: true, runValidator:true})

module.exports = BillingCycle;