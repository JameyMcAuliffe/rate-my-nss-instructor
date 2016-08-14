"use strict";

app.controller("CommCtrl", function($scope, DatabaseFactory, $location) {

	//creates an array of event objects which are used to populate the dom
	DatabaseFactory.getThreads()
	.then(function(threadsArray) {
		$scope.threads = threadsArray;
		console.log("threadsArray", $scope.threads);
	});
});