angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html'
		})
		.when('/signup', {
			templateUrl: 'app/views/pages/signup.html'
		})
<<<<<<< HEAD
		.when('/boxed-layout', {
			templateUrl: 'app/views/pages/boxed-layout.html'
		})
		.when('/iconic-leftbar', {
			templateUrl: 'app/views/pages/iconic-leftbar.html'
		})
=======
>>>>>>> f4081a350fe38ec09f7059106c1debb21c031686

		.when('/allStories', {
			templateUrl: 'app/views/pages/allStories.html',
			controller: 'AllStoriesController',
			controllerAs: 'story',
			resolve: {
				stories: function(Story) {
					return Story.allStories();
				}
			}

		})

	$locationProvider.html5Mode(true);

})