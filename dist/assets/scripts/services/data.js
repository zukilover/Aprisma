aprismaApp.factory('DataService', function ($resource) {
	var server = 'http://aprisma.06am.co/';
	return {
		balance_from_current: $resource(server + 'endpoint/balance_from_current.php', {}, {
			'query': { method: 'GET'}
		}),
		balance_from_loan: $resource(server + 'endpoint/balance_from_loan.php', {}, {
			'query': { method: 'GET'}
		}),
		cash_flow: $resource(server + 'endpoint/cash_flow.php', {}, {
			'query': { method: 'GET'}
		}),
		todays_balance: $resource(server + 'endpoint/todays_balance.php', {}, {
			'query': { method: 'GET'}
		}),
		monthly_ending: $resource(server + 'endpoint/monthly_ending.php', {}, {
			'query': { method: 'GET'}
		})
	};
});