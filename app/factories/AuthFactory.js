"use strict";

app.factory('AuthFactory', function() {

  //let provider = new firebase.auth.GoogleAuthProvider();
  let currentUserId = null;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User logged in", user.uid);
      currentUserId = user.uid;
    } else {
      console.log("User not logged in");
    }
  });

  // let authWithProvider = function() {
  //   return firebase.auth().signInWithPopup(provider);
  // };
  let isAuthenticated = function(){
    return (currentUserId) ? true : false;
  };

  let getUser = function() {
    return currentUserId;
  };

  let setUser = function(uid){
    currentUserId = uid;
  };

  let createAccount = function(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  let signIn = function(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  let logout = function() {
    currentUserId = null;
    return firebase.auth().signOut();
  };

  return {getUser, createAccount, logout, signIn, currentUserId, setUser, isAuthenticated};
});


// let createAccount = function(email, password){
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //   .then(function(object) {
  //     console.log("Register",object);
  //     $location.url("/instructor");
  //     $rootScope.$apply();
  // })
  // .catch(function(error){                            
  //     var errorCode = error.code;
  //     var errorMessage = error.message;

  //     console.log("errorMessage", errorMessage);
  //     Materialize.toast(errorMessage, 5000, "orange"); 
  //   });
  //};

  // let signIn = function (email, password){
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then(function(object) {
  //     console.log("Login",object);
  //     $location.url("/instructor");
  //     $rootScope.$apply();
  // })
    // .catch(function(error){                              
    //   var errorCode = error.code;
    //   var errorMessage = error.message;

    //   console.log("errorMessage", errorMessage);
    //   Materialize.toast(errorMessage, 5000, "red");
    // });
  //};