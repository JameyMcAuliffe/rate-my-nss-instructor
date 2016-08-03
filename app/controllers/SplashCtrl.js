"use strict";

//Students button bringing up login modal
app.controller("SplashCtrl", function($scope, $location) {
	$scope.studentsButtonClick = function() {

		$scope.login_register = true;		
		console.log("studentsButtonClick");
	};

	$scope.activateInstructor = function() {
		$location.url("/instructor");
		console.log("activateInstructor");
	};

	//$scope.instructors = ["Joe Shepherd", "Steve Brownlee"];

});