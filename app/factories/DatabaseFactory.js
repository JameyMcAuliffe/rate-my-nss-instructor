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

	let getRatings = function() {
		let ratings = [];
		return $q(function(resolve, reject) {
			$http.get(`${FirebaseURL}/users.json`)
			.success(function(ratingObject) {
				if(ratingObject) {
					Object.keys(ratingObject).forEach(function(key) {
						ratingObject[key].id = key;
						ratings.unshift(ratingObject[key]);
					});
				}
				resolve(ratings);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	return {postNewRating, getRatings};
});





