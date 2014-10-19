angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/feed', {
			templateUrl: 'views/feed.html',
			controller: 'FeedController'
		})

		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'SignupController'	
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'	
		})

		.when('/logout', {
			templateUrl: 'views/logout.html',
			controller: 'LogoutController'	
		});

	$locationProvider.html5Mode(true);

}]);