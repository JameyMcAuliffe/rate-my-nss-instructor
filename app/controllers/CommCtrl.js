"use strict";

app.controller("CommCtrl", function($scope, DatabaseFactory, $location, AuthFactory) {

	//creates an array of event objects which are used to populate the dom
	DatabaseFactory.getThreads()
	.then(function(threadsArray) {
		$scope.threads = threadsArray;
		console.log("threadsArray", $scope.threads);
		console.log("threadID", $scope.threads[0].id);
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

	$scope.getThreadId = function() {

	};
});