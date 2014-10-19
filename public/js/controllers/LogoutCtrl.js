angular.module('LogoutCtrl', []).controller('LogoutController' ,function($scope,$location) {
	Parse.User.logOut();
	$location.path("/");
	path.$apply();
});