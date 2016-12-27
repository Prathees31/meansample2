angular.module('MyApp', ['appRoutes', 'mainCtrl', 'authService', 'userCtrl', 'userService', 'storyService', 'storyCtrl', 'reverseDirective','googlechart','google-chart-sample', 'chartService'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');


})


.directive('chart1', [function () {
	return {
		restrict: 'A',
		link: function ($scope, $elm, $attr) {

			// Create the data table.
        var data = google.visualization.arrayToDataTable([
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
      // Treat first row as data as well.
    ], true);

    var options = {
      legend:'none'
    };

    var chart = new google.visualization.CandlestickChart($elm[0]);

    chart.draw(data, options);
			
		}
	};
}])

google.load('visualization', '1', {'packages':['corechart']});