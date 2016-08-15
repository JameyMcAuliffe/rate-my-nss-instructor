"use strict";

app.controller("ThreadCtrl", function($scope, DatabaseFactory, $routeParams, AuthFactory) {

	DatabaseFactory.getThread($routeParams.id)
	.then(function(threadArray) {
		console.log(threadArray);
		$scope.thread = threadArray;
	});

	$scope.newPost = {
		user: "",
		post: ""
	};

	$scope.addNewPost = function() {
		$scope.newPost.user = AuthFactory.getUser();
	
		DatabaseFactory.addPost($scope.newPost, $routeParams.id)
		.then(function(response) {
			console.log("response", response.name);
			console.log("newPost", $scope.newPost);
		});
	};	

});