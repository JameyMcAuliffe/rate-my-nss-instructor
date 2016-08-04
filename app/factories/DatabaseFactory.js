"use strict";

app.factory("DatabaseFactory", function(FirebaseURL, $q, $http, AuthFactory) {

	let postNewRating = function(newRating) {
		return $q(function(resolve, reject) {
			$http.post(
				`${FirebaseURL}/users.json`,
				JSON.stringify(newRating)
			)
			.success(function(ObjFromFirebase) {
				resolve(ObjFromFirebase);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	return {postNewRating};
});