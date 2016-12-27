angular.module('chartService', [])


.factory('chart', function($http) {

	var chartFactory = {};


	chartFactory.all = function(chart) {
		return $http.get('/api/iconic-leftbar');
	}



	return chartFactory;

});