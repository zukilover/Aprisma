var aprismaApp = angular.module('aprisma',
	[
		'ngResource',
		'ngSanitize',
		'ui.router',
		'gridshore.c3js.chart'
	]);


aprismaApp.run(
	['$rootScope', '$state', '$stateParams',
		function ($rootScope,   $state,   $stateParams) {

        	// Add references to $state and $stateParams to the $rootScope
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
}]);