angular.module('LoginCtrl', []).controller('LoginController' ,function($scope, $location) {
	$scope.login = function(guy) {
		Parse.User.logIn(guy.username,guy.pass, {
			success: function(usr) {
				$location.path("/");
				$scope.$apply();
			},
			error: function(usr, error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}
});