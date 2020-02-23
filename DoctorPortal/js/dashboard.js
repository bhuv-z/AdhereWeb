$(document).ready(function() {
  $(".dash").hide(); 
});

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
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      const signoutbtn = document.getElementById('logoutbtn');
      
      signoutbtn.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location.href = "index.html"
      });

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log('logged in');
            uidfb = firebaseUser.uid;
            qrCodeChange(uidfb);
        } else {
            console.log('not logged in');
        }
      });

      

      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });

}());


function qrCodeChange(uidfb) {
  const urlbeg = 'https://api.qrserver.com/v1/create-qr-code/?data=';
  const urlend = '&amp;size=100x100';
  var url = urlbeg + uidfb + urlend;
  console.log(url);
  document.getElementById("QRcode").src = url;
}

// function scanned() {
//   $(".qrcode").hide();
//   $(".dash").show();
// }