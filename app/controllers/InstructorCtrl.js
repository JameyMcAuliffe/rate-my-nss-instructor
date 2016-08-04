"use strict";

app.controller("InstructorCtrl", function($scope, DatabaseFactory, $location, AuthFactory) {

	$(document).ready(function() {
  	$('select').material_select();
	});

	$scope.getInstructor = function() {
		let instructor = $("#instructorSelect").val();
		console.log(instructor);
		return instructor;
	}

	$scope.selectInstructor = function() {
		$scope.selectedInstructor = true;
		console.log("selectInstructor");
		// let instructor = $("#instructorSelect").val();
		// console.log(instructor);
		// return instructor;
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

 	$scope.ratings = [0, 1, 2, 3, 4, 5];
	//add newRating to firebase using postNewRating from DatabaseFactory
	$scope.addNewRating = function() {

		//gets user's uid from AuthFactory getUser function
		$scope.newRating.uid = AuthFactory.getUser();
		$scope.newRating.iid = $scope.getInstructor();
		DatabaseFactory.postNewRating($scope.newRating)
		.then(function(response) {
			console.log("response", response);
		});
	};
});




