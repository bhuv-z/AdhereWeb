$(document).ready(function() {
    $(".signup-form").hide();
    $(".signin").css("text-decoration", "underline");

    $(".signin").click(function(){
        $(".signup-form").hide();
        $(".signin-form").show();
        $(".signin").css("text-decoration", "underline");
        $(".signup").css("text-decoration", "none");
        document.getElementById("signup").reset();
    });

    $(".signup").click(function(){
        $(".signup-form").show();
        $(".signin-form").hide();
        $(".signup").css("text-decoration", "underline");
        $(".signin").css("text-decoration", "none");
        document.getElementById("signin").reset();
    });
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
      const drname = document.getElementById('name');
      const signinEmail = document.getElementById('signInEmail');
      const signinPass = document.getElementById('signInPass');

      const signupEmail = document.getElementById('signUpEmail');
      const signupPass = document.getElementById('signUpPass');
      const signupPass2 = document.getElementById('signUpPass2')

      const loginbtn = document.getElementById('signinbtn');
      const signupbtn = document.getElementById('signupbtn');
      

      loginbtn.addEventListener('click', e=> {
        const email = signinEmail.value;
        const pass = signinPass.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
      });

      signupbtn.addEventListener('click', e => {
        const email = signupEmail.value;
        const pass = signupPass.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
        
      });

    function timeout() {
        var user = firebase.auth().currentUser;
        if (user) {
            window.location.href = "dashboard.html";
        }
    }

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log('logged in');
            setTimeout(timeout, 500);
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