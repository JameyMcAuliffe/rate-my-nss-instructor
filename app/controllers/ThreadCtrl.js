"use strict";

app.controller("ThreadCtrl", function($scope, DatabaseFactory, $routeParams) {

	DatabaseFactory.getThread($routeParams.id)
	.then(function(threadArray) {
		console.log(threadArray);
		$scope.thread = threadArray;


		//loops through threadsArray and pushes each threadId into idArray
		// angular.forEach(threadsArray, function(value) {

		// });
	});

});