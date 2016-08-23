aprismaApp.factory('DataService', function ($resource) {
	return {
		balance_from_current: $resource('assets/scripts/data/balance_from_current.json', {}, {
			'query': { method: 'GET'}
		}),
		balance_from_loan: $resource('assets/scripts/data/balance_from_loan.json', {}, {
			'query': { method: 'GET'}
		}),
		cash_flow: $resource('assets/scripts/data/cash_flow.json', {}, {
			'query': { method: 'GET'}
		}),
		todays_balance: $resource('assets/scripts/data/todays_balance.json', {}, {
			'query': { method: 'GET'}
		}),
		monthly_ending: $resource('assets/scripts/data/monthly_ending.json', {}, {
			'query': { method: 'GET'}
		})
	};
});