"use strict";

app.controller("CommCtrl", function($scope, DatabaseFactory, $location) {

	//creates an array of event objects which are used to populate the dom
	DatabaseFactory.getEvents()
	.then(function(eventsArray) {
		$scope.events = eventsArray;
		console.log("eventsArray", $scope.events);
	});
});