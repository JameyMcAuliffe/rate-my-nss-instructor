"use strict";

app.controller("InstructorCtrl", function($scope, DatabaseFactory, $location, AuthFactory) {

	//needed to show select options
	$(document).ready(function() {
  	$('select').material_select();
	});

	//creates an array of rating objects which are used to populate the dom
	DatabaseFactory.getRatings()
	.then(function(ratingsArray) {
		$scope.ratings = ratingsArray;
	});

	// $scope.getAvgRating = function(ratingsArray) {
	// 	let total = 0;
	// 	angular.forEach($scope.ratings, function(value, key) {
	// 		total = total + value.rating;
	// 	});
	// 	return total;
	// };
	

	//may not be needed
	$scope.instructors = ["Joe Shepherd", "Steve Brownlee"];

/******************** Show/Hide functionality **********************/
	
	$scope.getInstructor = function() {
		let instructor = $("#instructorSelect").val();
		console.log(instructor);
		return instructor;
	};

	$scope.selectInstructor = function() {
		$scope.selectedInstructor = true;
		$scope.instructor = $("#instructorSelect").val();
		console.log("selectInstructor", $scope.instructor);
	};

	$scope.activateRate = function() {
		$scope.rateForm = true;
		$scope.selectedInstructor = false;
	};

	$scope.submitRating = function() {
		$scope.rateForm = false;
		$scope.addNewRating();
		$scope.selectedInstructor = true;
	};

	/******************** End Show/Hide functionality **********************/


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
		//dynamically adds new rating to the dom
		.then(function() {
			DatabaseFactory.getRatings()
			.then(function(ratingsArray) {
				$scope.ratings = ratingsArray;
			});
		});
	};
});




