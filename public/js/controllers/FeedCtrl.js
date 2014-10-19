angular.module('FeedCtrl', ['ngDraggable']).controller('FeedController', function($scope) {
	$scope.user = Parse.User.current();
	$scope.emailHash = md5($scope.user.attributes.email);

	$scope.addFavor = function(favor) {
		var Thing = Parse.Object.extend('Favor');
		user = Parse.User.current();
		thing = new Thing();
		thing.set('favor',favor.name);
		thing.set('username',user.attributes.username);
		thing.set('description',favor.desc);
		thing.set('time',new Date().getTime());
		thing.set('email',user.attributes.email);
		thing.set('emailHash',md5(user.attributes.email));
		thing.set('phone',user.attributes.phone);
		thing.save({
			success: makeStuff()
		});
	}

	function makeStuff() {
		var stuff = Parse.Object.extend("Favor");
		var stuffs = new Parse.Query(stuff);
		return stuffs.find({
			success: function(results) {
				$scope.favors = results;
				$scope.$apply();
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}
	makeStuff()

	$scope.centerAnchor = true;
	$scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
	$scope.draggableObjects = [];
	$scope.droppedObjects = [];
	var stuff = Parse.Object.extend("Favor");
	var stuffs = new Parse.Query(stuff);
	stuffs.find({
		success: function(results) {
			for(var i=0; i<=results.length; i++) {
				$scope.draggableObjects.push(results[i]);
			}
			$scope.onDropComplete=function(data,evt){
		        var index = $scope.droppedObjects.indexOf(data);
		        if (index == -1)
		        $scope.droppedObjects.push(data);
		        console.log($scope.droppedObjects);
		    }
		    $scope.onDragSuccess=function(data,evt){
		        var index = $scope.droppedObjects.indexOf(data);
		        if (index > -1) {
		            $scope.droppedObjects.splice(index, 1);
		        }
		    }
		}
	});


});