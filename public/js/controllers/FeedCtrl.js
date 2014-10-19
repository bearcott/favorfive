angular.module('FeedCtrl', []).controller('FeedController', function($scope) {
	$scope.user = Parse.User.current();
	$scope.emailHash = md5($scope.user.attributes.email);

	$scope.addFavor = function(favor) {
		var Thing = Parse.Object.extend('Favor');
		user = Parse.User.current();
		thing = new Thing();
		thing.set('favor',favor.name);
		thing.set('description',favor.desc);
		thing.set('time',new Date().getTime());
		thing.set('email',user.attributes.email);
		thing.set('emailHash',md5(user.attributes.email));
		thing.set('phone',user.attributes.phone);
		thing.save();
	}
	$scope.convertToDate = function (stringDate){
	  var dateOut = new Date(stringDate);
	  dateOut.setDate(dateOut.getDate() + 1);
	  return dateOut;
	};
	var stuff = Parse.Object.extend("Favor");
	var stuffs = new Parse.Query(stuff);
	stuffs.find({
		success: function(results) {
			$scope.favors = results;
			$scope.$apply();
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
	setInterval(function() {
		stuffs.find({
			success: function(results) {
				$scope.favors = results;
				$scope.$apply();
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});
	},500);

});