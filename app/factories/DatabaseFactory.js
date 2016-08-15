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

	let postNewThread = function(newThread) {
		return $q(function(resolve, reject) {
			$http.post(
				`${FirebaseURL}/threads.json`,
				JSON.stringify(newThread)
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

	let getThreads = function() {
		let threads = [];
		return $q(function(resolve, reject) {
			$http.get(`${FirebaseURL}/threads.json`)
			.success(function(threadObject) {
				if(threadObject) {
					Object.keys(threadObject).forEach(function(key) {
						threadObject[key].id = key;
						threads.unshift(threadObject[key]);
					});
				}
				resolve(threads);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

		let getThread = function(id) {
		let threads = [];
		return $q(function(resolve, reject) {
			$http.get(`${FirebaseURL}/threads/${id}.json`)
			.success(function(threadObject) {
				// if(threadObject) {
				// 	Object.keys(threadObject).forEach(function(key) {
				// 		threadObject[key].id = key;
				// 		threads.unshift(threadObject[key]);
				// 	});
				// }
				resolve(threadObject);
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

	return {postNewRating, getRatings, deleteRating, getThreads, postNewThread, getThread};
});





