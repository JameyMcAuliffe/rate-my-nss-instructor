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

	let getEvents = function() {
		let events = [];
		return $q(function(resolve, reject) {
			$http.get(`${FirebaseURL}/events.json`)
			.success(function(eventObject) {
				if(eventObject) {
					Object.keys(eventObject).forEach(function(key) {
						eventObject[key].id = key;
						events.unshift(eventObject[key]);
					});
				}
				resolve(events);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	let deleteRating = function (id) {
    return $q(function(resolve, reject) {
      $http.delete(
        `${FirebaseURL}/users/${id}.json`
      )
      .success(function() {
        resolve();
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

	return {postNewRating, getRatings, deleteRating, getEvents};
});





