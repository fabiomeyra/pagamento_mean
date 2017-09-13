const express = require('express');

module.exports = (server)=>{


	/*rotas abertas*/
	const openApi = express.Router()
  	server.use('/oapi', openApi)

	const AuthService = require('../api/user/AuthService')
  	openApi.post('/login', AuthService.login)
  	openApi.post('/signup', AuthService.signup)
  	openApi.post('/validateToken', AuthService.validateToken)

	/*fim rotas abertas*/

	//rotas protegidas
	const protectedApi = express.Router()
	server.use('/api', protectedApi)

	protectedApi.use(auth)

	//rotas da API
	const billingCycleService = require('../api/billingCycle/billingCycleService');

	//registra todos os métodos na url /billingCycles em protectedApi
	billingCycleService.register(protectedApi, '/billingCycles');


	const billingSummaryService = require('../api/billingSummary/billingSummaryService');

	//faz com que a /billingSummary atenda requisições get. e roda a função passada como parâmetro
	protectedApi.route('/billingSummary').get(billingSummaryService.getSummary);

}