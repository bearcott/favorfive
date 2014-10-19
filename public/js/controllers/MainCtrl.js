angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.user = Parse.User.current();
});
