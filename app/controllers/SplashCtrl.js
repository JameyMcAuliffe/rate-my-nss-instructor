"use strict";

//Students button bringing up login modal
app.controller("SplashCtrl", function($scope, $location, AuthFactory) {

	//ng-click function for the Students button
	$scope.studentsButtonClick = function() {

		//sets value of login_register to true, showing the new/returning user buttons
		$scope.login_register = true;		
		console.log("studentsButtonClick");
	};

	//ng-click function for new user button
	$scope.activateRegister = function() {

		//sets value of registerMode to true, showing the registration form
		$scope.registerMode = true;
		$scope.loginMode = false;
	};	

	//ng-click function for returning user button
	$scope.activateLogin = function() {
		$scope.registerMode = false;

		//sets loginMode to true, showing the login form
		$scope.loginMode = true;
	};

	//ng-click function for login button
	$scope.login = function() {
		AuthFactory.signIn($scope.loginEmail, $scope.loginPassword);
		$location.url("/instructor");
		console.log("user logged in");
	};

	//ng-click function for register button
	$scope.register = function() {
		AuthFactory.createAccount($scope.registerEmail, $scope.registerPassword);
		$location.url("/instructor");
		console.log("new user registered");
	};

	//$scope.instructors = ["Joe Shepherd", "Steve Brownlee"];

});