angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'SignupController'	
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'	
		});

	$locationProvider.html5Mode(true);

}]);