angular.module('chartService', [])


.factory('chart', function($http) {

	var chartFactory = {};


	chartFactory.all = function(symbol, fromDate, toDate) {
		var data = $http.get('/api/iconic-leftbar/'+symbol+'/'+fromDate+'/'+toDate);
		return data;
	}


	return chartFactory;

});