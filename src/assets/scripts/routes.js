aprismaApp
	.config(
		['$stateProvider', '$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {

			// -------------------------------- //
			// 		Redirects and Otherwise
			// -------------------------------- //

	        $urlRouterProvider
				.otherwise('/dashboard/overview');


	        // -------------------------------- //
	        // 		State Configurations		//
	        // -------------------------------- //

	        $stateProvider

				.state('dashboard', {
					abstract: true,
	        		url: '/dashboard',
	        		controller: 'dashboard',
					templateUrl: 'views/templates/dashboard/index.html'
	        	})

					.state('dashboard.overview', {
						url: '/overview',
		        		views: {
		        			'balance-current': {
		        				controller: 'dashboardBalanceCurrent',
								templateUrl: 'views/templates/dashboard/balance-current.html'
		        			},
		        			'balance-loan': {
		        				controller: 'dashboardBalanceLoan',
								templateUrl: 'views/templates/dashboard/balance-loan.html'
		        			},
		        			'cash-flow': {
		        				controller: 'dashboardCashFlow',
								templateUrl: 'views/templates/dashboard/cash-flow.html'
		        			},
		        			'today-balance': {
		        				controller: 'dashboardTodayBalance',
								templateUrl: 'views/templates/dashboard/today-balance.html'
		        			}
		        		}
		        	})
}]);
