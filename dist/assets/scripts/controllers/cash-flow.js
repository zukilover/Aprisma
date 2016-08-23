aprismaApp

	.controller('dashboardCashFlow', ['$scope', '$filter', '$state', '$stateParams', 'DataService',
		function ($scope, $filter, $state, $stateParams, DataService) {
			$scope.cashflow = {};

			/*------------------------------------------------------------------
			 * Cash Flow
			 *------------------------------------------------------------------*/
			// initial state
			$scope.cashflow.data = null;
			$scope.cashflow.points = [];
			$scope.cashflow.columns = [{
				"id" : "Cash In", 
				"color" : "#98CB00",
				"type" : "bar"
			},{
				"id" : "Cash Out", 
				"color" : "#FF4D4D",
				"type" : "bar"
			}];
			$scope.cashflow.datax = [{
				"id" : "x"
			}];
			$scope.cashflow.tooltip = {
				value: function (value, ratio, id) {
					return $filter('currency')(value, '');
				}
			};

			// get data service
			DataService.cash_flow.query().$promise.then(
				function(data){ 
					$scope.cashflow.points = data.cashFlow;
			});
			

	}])
