"use strict";

app.controller("CommCtrl", function($scope, DatabaseFactory, $routeParams, AuthFactory) {

	//creates an array of thread objects which are used to populate the dom
	DatabaseFactory.getThreads()
	.then(function(threadsArray) {

		//array holding thread objects
		$scope.threads = threadsArray;
		console.log("threadsArray", $scope.threads);
		$scope.threadId = "";
		$scope.idArray = [];

		//loops through threadsArray and pushes each threadId into idArray
		angular.forEach(threadsArray, function(value) {
			$scope.threadId = value.id;
			$scope.idArray.push($scope.threadId);
		});
		console.log("idArray", $scope.idArray);
	});

	/************** Show/Hide Functionality ****************/

	$scope.showThreadForm = function() {
		$scope.threadForm = true;
		$scope.hideThreads = true;
	};

	$scope.cancelNewThread = function() {
		$scope.threadForm = false;
		$scope.hideThreads = false;
	};

	/*********** End Show/Hide Functionality *************/

	$scope.newThread = {
		title: "",
		user: "",
		originalPost: ""
	};



	$scope.addNewThread = function() {
		//gets user's uid from AuthFactory getUser function
		$scope.newThread.user = AuthFactory.getUser();


		DatabaseFactory.postNewThread($scope.newThread)
		.then(function(response) {
			console.log("response", response.name);
			console.log("newThread", $scope.newThread);
		})
		//dynamically adds new thread to the dom
		.then(function() {
			DatabaseFactory.getThreads()
			.then(function(threadsArray) {
				$scope.threads = threadsArray;
			});
		});
		$scope.threadForm = false;
		$scope.hideThreads = false;
	};

	$scope.getSelectedThread = function(id) {
		console.log(id);
	};
});