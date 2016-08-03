"use strict";

app.controller("NavCtrl", function($scope, AuthFactory) {
	
	$scope.logout = function() {
		AuthFactory.logout();
	};
});