aprismaApp

	.controller('dashboardBalanceLoan', ['$scope', '$filter', '$state', '$stateParams', 'DataService',
		function ($scope, $filter, $state, $stateParams, DataService) {
			$scope.balance = {
				loan : {}
			};

			/*------------------------------------------------------------------
			 * Total available balance
			 * from loan & Savings Account
			 *------------------------------------------------------------------*/
			// initial state
			$scope.balance.loan.data = null;
			$scope.balance.loan.points = [{"Loading": 100}];
			$scope.balance.loan.columns = [{"id":"Loading", "type":"donut"}];
			$scope.colors = {
				"IDR" : "#515151",
				"USD" : "#BEBEBE",
				"JPY" : "#939393",
				"SGD" : "#797979"
			};
			$scope.balance.loan.tooltip = {
				value: function (value, ratio, id) {
					var amount = $scope.balance.loan.data.balance[0][id].amount;
					return $filter('currency')(amount, '');
				}
			};

			$scope.renderGraph = function() {
	            DataService.balance_from_loan.query().$promise.then(
					function(data){ 
						var point = {}, column;
						$scope.balance.loan.columns = [];
						$scope.balance.loan.data = data;
						
						for(var i in data.balance[0]) {
							column = {
								"id" : i,
								"color" : $scope.colors[i],
								"type" : "donut"
							};
							point[i] = data.balance[0][i].percentage;
							$scope.balance.loan.points[0] = (point);
							$scope.balance.loan.columns.push(column);
						}
						$scope.loading = false;
				});
	        };

	        $scope.renderGraph();
			

	}])
