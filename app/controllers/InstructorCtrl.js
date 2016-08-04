"use strict";

app.controller("InstructorCtrl", function($scope, DatabaseFactory, $location, AuthFactory) {

	$(document).ready(function() {
  	$('select').material_select();
	});

	DatabaseFactory.getRatings()
	.then(function(ratingsArray) {
		$scope.ratings = ratingsArray;
		if($scope.ratings.length > 5) {
			$scope.ratings.pop();
		}
	});

	$scope.instructors = ["Joe Shepherd", "Steve Brownlee"];

	$scope.getInstructor = function() {
		let instructor = $("#instructorSelect").val();
		console.log(instructor);
		return instructor;
	};

	$scope.selectInstructor = function() {
		$scope.selectedInstructor = true;
		let instructor = $("#instructorSelect").val();
		console.log("selectInstructor", instructor);
	};

	$scope.activateRate = function() {
		$scope.rateForm = true;
	};

	$scope.submitRating = function() {
		$scope.rateForm = false;
		$scope.addNewRating();
	};

	//object to hold values of new ratings
	$scope.newRating = {
	rating: "",
	comment: "",
	uid: "",
	iid: ""
 	};


	//add newRating to firebase using postNewRating from DatabaseFactory
	$scope.addNewRating = function() {

		//gets user's uid from AuthFactory getUser function
		$scope.newRating.uid = AuthFactory.getUser();
		$scope.newRating.iid = $scope.getInstructor();
		DatabaseFactory.postNewRating($scope.newRating)
		.then(function(response) {
			console.log("response", response);
		})
		.then(function() {
			DatabaseFactory.getRatings()
			.then(function(data) {
				console.log(data);
			});
		});
	};
});




