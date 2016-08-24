aprismaApp

	.controller('dashboardTodayBalance', ['$scope', '$filter', '$state', '$stateParams', 'DataService',
		function ($scope, $filter, $state, $stateParams, DataService) {
			$scope.todaysBalance = null;
			$scope.details = null;
			$scope.total = 0;
			$scope.monthlyEnding = [];
			
			$scope.renderGraph = function() {
	            DataService.todays_balance.query().$promise.then(
					function(data){ 
						$scope.todaysBalance = data;
						$scope.details = data.details;
						for(var i in $scope.details){
							// initial state
							$scope.monthlyEnding[i] = {};
							$scope.monthlyEnding[i].data = null;
							$scope.monthlyEnding[i].points = [];
							$scope.monthlyEnding[i].columns = [{
								"id" : "Jan", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Feb", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Mar", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Apr", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "May", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Jun", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Jul", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Aug", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Sep", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Oct", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Nov", 
								"color" : "#C9C9C9",
								"type" : "bar"
							},{
								"id" : "Dec", 
								"color" : "#C9C9C9",
								"type" : "bar"
							}];
							$scope.monthlyEnding[i].points = $scope.details[i].balance.monthlyEnding;
							$scope.total += $scope.details[i].balance.available;
						}

						$scope.loading = false;
				});
	        };

	        $scope.renderGraph();

	}])
