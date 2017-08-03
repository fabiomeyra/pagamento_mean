const _ = require('lodash');
const BillingCycle = require('../billingCycle/billingCycle');

function getSummary(req, res) {

	BillingCycle.aggregate({

		/*irá somar todos os creditos e debitos*/

		$project : {
			credit: {$sum: "$credits.value"},
			debt: {$sum: "$debts.value"}
		}
	},

	{
		$group : {
			_id:null,
			credit: {$sum: "$credit"},
			debt: {$sum: "$debt"}
		}
	},

	/*irá projetar somente os atributos que receberem o valor 1(true)*/
	{
		$project : {
			_id: 0,
			credit: 1,
			debt: 1
		}
	},

	(error, result)=> {
		if(error){
			res.status(500).json({erros : [error]})
		}else{
				/*se o primeiro parâmetro for null ou undefined o res será o segundo parâmetro,
				caso o res não possua ou credit ou debt, o valor padrão passado no segundo paraâmetro
				será adicionado*/
				res.json(_.defaults(result[0], {credit : 0, debt : 0}));
		}
	})
}

module.exports = { getSummary }