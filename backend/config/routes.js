const express = require('express');

module.exports = (server)=>{

	//API Routes
	const router = express.Router()
	server.use('/api', router)

	//rotas da API
	const billingCycleService = require('../api/billingCycle/billingCycleService');

	//registra todos os métodos na url /billingCycles en router
	billingCycleService.register(router, '/billingCycles');


	const billingSummaryService = require('../api/billingSummary/billingSummaryService');

	//faz com que a /billingSummary atenda requisições get. e roda a função passada como parâmetro
	router.route('/billingSummary').get(billingSummaryService.getSummary);

}