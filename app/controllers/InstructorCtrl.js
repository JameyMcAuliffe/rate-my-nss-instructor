"use strict";

app.controller("InstructorCtrl", function($scope, DatabaseFactory, $location, AuthFactory) {

	//needed to show select options
	// $(document).ready(function() {
 //  	$('select').material_select();
	// });

	//creates an array of rating objects which are used to populate the dom
	DatabaseFactory.getRatings()
	.then(function(ratingsArray) {
		$scope.ratings = ratingsArray;
		console.log("ratingsArray", $scope.ratings);

		//Loop through ratingsArray to calculate Average Rating
		let total = 0;
		angular.forEach(ratingsArray, function(value) {
			let rating = parseInt(value.rating);
			total = total + rating;
		});
		console.log("total", total);
		$scope.totalRating = total / ratingsArray.length;
		console.log("totalRating", $scope.totalRating);
	});

/******************** Show/Hide and Comment/Rating functionality **********************/
	
	$scope.activateRate = function() {
		$scope.rateForm = true;
		$scope.hideJoePage = true;
	};

	$scope.submitRating = function() {
		$scope.rateForm = false;
		$scope.addNewRating();
		$scope.hideJoePage = false;
		$scope.hideRatingButton = true;
		$scope.showEditDelete = true;
	};

	$scope.cancelRating = function() {
		$scope.rateForm = false;
		$scope.hideJoePage = false;
		$scope.editForm = false;
	};

	$scope.editRating = function() {
		$scope.hideJoePage = true;
		$scope.editForm = true;
	};

	$scope.saveEditedRating = function() {
		$scope.deleteRating();
		$scope.addNewRating();
		$scope.hideJoePage = false;
		$scope.hideRatingButton = true;
		$scope.showEditDelete = true;
		$scope.editForm = false;
	};

	$scope.showOlderRatings = function() {
		$scope.olderRatings = true;
		$scope.hideOlderRatingsButton = true;
	};

	$scope.hideOlderRatings = function() {
		$scope.olderRatings = false;
		$scope.hideOlderRatingsButton = false;
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
		//$scope.newRating.iid = $scope.getInstructor();
		DatabaseFactory.postNewRating($scope.newRating)
		.then(function(response) {
			console.log("response", response.name);
			console.log("newRating", $scope.newRating);
		})
		//dynamically adds new rating to the dom
		.then(function() {
			DatabaseFactory.getRatings()
			.then(function(ratingsArray) {
				$scope.ratings = ratingsArray;
			});
		});
	};

	$scope.deleteRating = function() {
		let currentUser = AuthFactory.getUser();

		//finds rating object in the array that matches user's id, then reloads dom
		angular.forEach($scope.ratings, function(value) {
			if (value.uid === currentUser) {
				console.log("user found", value.id);
				DatabaseFactory.deleteRating(value.id)
				.then(function() {
					DatabaseFactory.getRatings()
					.then(function(ratingsArray) {
						$scope.ratings = ratingsArray;
					});
				});
			}	
		});
		$scope.hideRatingButton = false;
		$scope.showEditDelete = false;
	};
});




