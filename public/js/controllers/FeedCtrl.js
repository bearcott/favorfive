angular.module('FeedCtrl', []).controller('FeedController', function($scope) {
	$scope.user = Parse.User.current();
	$scope.emailHash = md5($scope.user.attributes.email);
});