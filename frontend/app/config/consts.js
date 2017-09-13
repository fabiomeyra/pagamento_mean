angular.module('primeiraApp').constant('consts', {
  appName: 'MEAN - Ciclos de Pagamento',
  version: '1.0',
  owner: '@fabiomeyra',
  year: '2017',
  site: '',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])