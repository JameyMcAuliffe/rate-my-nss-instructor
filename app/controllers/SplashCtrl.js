"use strict";

//Students button bringing up login modal
app.controller("SplashCtrl", function($scope) {
	$scope.studentsButtonClick = function() {

		$scope.login_register = true;		
		console.log("studentsButtonClick");
	};

	$scope.activateLogin = function() {
		$scope.loginMode = true;
		$scope.registerMode = false;
		// $scope.login_register = false;
		console.log("activateLogin");
	};

	$scope.activateRegister = function() {
		$scope.loginMode = false;
		$scope.registerMode = true;
		// $scope.login_register = false;
		console.log("activateRegister");
	};

	$scope.activateSelect = function() {
		$(document).ready(function() {
    	$('select').material_select();
  	});
		$scope.selectMode = true;
	};

	//$scope.instructors = ["Joe Shepherd", "Steve Brownlee"];

	$scope.instructorSelect = function() {
		console.log("instructorSelect");
		//$location.url('/joe');
	};
});