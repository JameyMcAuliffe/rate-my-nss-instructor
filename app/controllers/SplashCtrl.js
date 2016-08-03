"use strict";

//Students button bringing up login modal
app.controller("SplashCtrl", function($scope, $location, AuthFactory) {
	$scope.studentsButtonClick = function() {

		$scope.login_register = true;		
		console.log("studentsButtonClick");
	};

	$scope.activateRegister = function() {
		$scope.registerMode = true;
		$scope.loginMode = false;
	};	

	$scope.activateLogin = function() {
		$scope.registerMode = false;
		$scope.loginMode = true;
	};

	$scope.login = function() {
		AuthFactory.signIn($scope.loginEmail, $scope.loginPassword);
		$location.url("/instructor");
		console.log("user logged in");
	};

	$scope.register = function() {
		AuthFactory.createAccount($scope.registerEmail, $scope.registerPassword);
		$location.url("/instructor");
		console.log("new user registered");
	};

	//$scope.instructors = ["Joe Shepherd", "Steve Brownlee"];

});