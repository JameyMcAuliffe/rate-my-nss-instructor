"use strict";

//Students button bringing up login modal
app.controller("SplashCtrl", function($scope, $location, AuthFactory) {

	
	// if(!AuthFactory.getUser()) {
	// 	$scope.hideLogins = false;
	// 	$scope.showLinks = false;
	// }
	// else {
	// 	$scope.hideLogins = true;
	// 	$scope.showLinks = true;
	// }

	//ng-click function for new user button
	$scope.activateRegister = function() {

		//sets value of registerMode to true, showing the registration form
		$scope.login_register = true;
		$scope.registerMode = true;
		$scope.loginMode = false;
	};	

	//ng-click function for returning user button
	$scope.activateLogin = function() {
		$scope.login_register = true;
		$scope.registerMode = false;

		//sets loginMode to true, showing the login form
		$scope.loginMode = true;
	};

	//ng-click function for login button
	$scope.login = function() {
		AuthFactory.signIn($scope.loginEmail, $scope.loginPassword);
		$location.url("/instructor");
		console.log("user logged in");
		Materialize.toast('Welcome Back!', 3000, 'rounded');
	};

	//ng-click function for register button
	$scope.register = function() {
		AuthFactory.createAccount($scope.registerEmail, $scope.registerPassword);
		$location.url("/instructor");
		console.log("new user registered");
		Materialize.toast('Welcome!', 3000, 'rounded');
	};

	$scope.cancelRegister = function() {
		$scope.login_register = false;
		$scope.registerMode = false;
	};

	$scope.cancelLogin = function() {
		$scope.login_register = false;
		$scope.loginMode = false;
	};

	//$scope.instructors = ["Joe Shepherd", "Steve Brownlee"];

});