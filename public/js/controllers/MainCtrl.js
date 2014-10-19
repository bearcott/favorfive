angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.user = Parse.User.current();
	console.log($scope.user.attributes.email);
	$scope.tagline = 'Learn. Inspire. Be Inspired.';
	$scope.description = 'Find a peer on campus that can help you.';
	$scope.learn = 'Learn More';
});
