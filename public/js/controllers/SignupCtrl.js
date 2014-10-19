angular.module('SignupCtrl', []).controller('SignupController', function($scope, $location) {
	$scope.makeusr = function(guy) {
		var user = new Parse.User();
		user.set("username", guy.username);
		user.set("password", guy.pass);
		user.set("email", guy.email);
		user.signUp(null, {
			success: function(usr) {
				$location.path("/login");
				$scope.$apply();
			},
			error: function(usr, error) {
				// Show the error message somewhere and let the user try again.
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}

});