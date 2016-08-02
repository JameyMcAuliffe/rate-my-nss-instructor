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
		console.log("activateLogin");
	};

	$scope.activateRegister = function() {
		$scope.loginMode = false;
		$scope.registerMode = true;
		console.log("activateRegister");
	};
});