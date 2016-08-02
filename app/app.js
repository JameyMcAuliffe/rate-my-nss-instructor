"use strict";

var app = angular.module("RateApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
      templateUrl: "partials/splash.html",
      controller: "SplashCtrl"
    })
	.when('/instructor', {
      templateUrl: "partials/instructor.html",
      controller: "InstructorCtrl"
   })
});