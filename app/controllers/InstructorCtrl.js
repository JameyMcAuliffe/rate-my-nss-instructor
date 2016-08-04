"use strict";

app.controller("InstructorCtrl", function($scope) {

	$(document).ready(function() {
  	$('select').material_select();
	});

	$scope.selectInstructor = function() {
		$scope.selectedInstructor = true;
		console.log("selectInstructor");
		let instructor = $("#instructorSelect").val();
		console.log(instructor);
		return instructor;
	};

	$scope.activateRate = function() {
		$scope.rateForm = true;
	};

	$scope.submitRating = function() {
		$scope.rateForm = false;
	}
});