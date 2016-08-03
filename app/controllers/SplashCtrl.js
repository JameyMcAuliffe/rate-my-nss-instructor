"use strict";

//Students button bringing up login modal
app.controller("SplashCtrl", function($scope, $location, AuthFactory) {
	$scope.studentsButtonClick = function() {

		$scope.login_register = true;		
		console.log("studentsButtonClick");
	};

	$scope.login = function() {
		AuthFactory.signIn($scope.loginEmail, $scope.loginPassword);
		$location.url("/instructor");
		console.log("user logged in");
	};

	$scope.register = function() {
		AuthFactory.createAccount($scope.registerEmail, $scope.registerPassword);
		$location.url("/instructor");
		console.log("user registered");
	};

	//$scope.instructors = ["Joe Shepherd", "Steve Brownlee"];

});