(function() {
  const firebaseConfig = {
      apiKey: "AIzaSyDSIUn4IgrOq5qnRPYSR0kGlEtsfbtr8g4",
      authDomain: "adhere-9df62.firebaseapp.com",
      databaseURL: "https://adhere-9df62.firebaseio.com",
      projectId: "adhere-9df62",
      storageBucket: "adhere-9df62.appspot.com",
      messagingSenderId: "146681344964",
      appId: "1:146681344964:web:89122328353ee04cdc2a91",
      measurementId: "G-ME5854D1C8"
    };
    firebase.initializeApp(firebaseConfig); //initialize firebase

    firebase.auth().signInAnonymously().catch(function(error) { //login as anonymous
      var errorCode = error.code; //catch errors
      var errorMessage = error.message; //catch errors
    });

    firebase.auth().onAuthStateChanged(function(user) { //check if the login is successful
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        console.log("user is logged in anonymously");
        console.log(uid);
      } else {
        // User is signed out.
        console.log("user is logged out");
      }
    });
}());