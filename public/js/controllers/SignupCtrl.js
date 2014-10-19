angular.module('SignupCtrl', []).controller('SignupController', function($scope) {
	$scope.makeusr = function(guy) {
		var user = new Parse.User();
		user.set("username", guy.name);
		user.set("password", guy.pass);
		user.set("email", guy.email);

		user.signUp(null, {
			success: function(user) {
			// Hooray! Let them use the app now.
			},
			error: function(user, error) {
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
			}
		});
	}

});