"use strict";

var app = angular.module("RateApp", ["ngRoute"])
.constant('FirebaseURL', "https://ratemyteacher-472c5.firebaseio.com");



app.config(function($routeProvider, FBCreds) {

	let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain,
    databaseURL: FBCreds.databaseURL,
    storageBucket: FBCreds.storageBucket
  };

  firebase.initializeApp(authConfig);

	$routeProvider
	.when('/', {
      templateUrl: "partials/splash.html",
      controller: "SplashCtrl"
   })
	.when('/instructor', {
      templateUrl: "partials/instructor.html",
      controller: "InstructorCtrl"
   })
  .when('/community', {
      templateUrl: "partials/community.html",
      controller: "CommCtrl"
   })
  .when('/community/thread', {
      templateUrl: "partials/thread.html",
      controller: "ThreadCtrl"
   });
});