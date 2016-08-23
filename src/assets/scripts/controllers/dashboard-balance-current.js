aprismaApp

	.controller('dashboardBalanceCurrent', ['$scope', '$filter', '$state', '$stateParams', 'DataService',
		function ($scope, $filter, $state, $stateParams, DataService) {
			$scope.balance = {
				current : {}
			};

			/*------------------------------------------------------------------
			 * Total available balance
			 * from Current & Savings Account
			 *------------------------------------------------------------------*/
			// initial state
			$scope.balance.current.data = null;
			$scope.balance.current.points = [{"Loading": 100}];
			$scope.balance.current.columns = [{"id":"Loading", "type":"donut"}];
			$scope.balance.current.tooltip = {
				value: function (value, ratio, id) {
					var amount = $scope.balance.current.data.balance[0][id].amount;
					return $filter('currency')(amount, '');
				}
			};

			// get data service: 
			// balance from current & savings account
			DataService.balance_from_current.query().$promise.then(
				function(data){ 
					var point = {}, column, colors;
					$scope.balance.current.columns = [];
					$scope.balance.current.data = data;
					colors = {
						"IDR" : "#4C78A5",
						"USD" : "#5A8CBF",
						"JPY" : "#90ACD3",
						"SGD" : "#C6CCE2"
					};
					for(var i in data.balance[0]) {
						column = {
							"id" : i,
							"color" : colors[i],
							"type" : "donut"
						};
						point[i] = data.balance[0][i].percentage;
						$scope.balance.current.points[0] = (point);
						$scope.balance.current.columns.push(column);
					}
			});
			

	}])
