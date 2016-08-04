"use strict";

app.controller("NavCtrl", function($scope, AuthFactory) {
	
	//ng-click function for logout link
	$scope.logout = function() {
		AuthFactory.logout();
	};
});