
function callFB() {
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
}

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

    $("#error1").hide();
    $("#error2").hide();
    $("#wrong1").hide();
    $("#wrong2").hide();
});


function checkSignIn() {
    var email = $("#signInEmail").val();
    var pass = $("#signInPass").val();
    $("#error1").hide();
    $("#error2").hide();
    $("#wrong1").hide();
    $("#wrong2").hide();
    console.log(email);
    console.log(pass);
    var errorCheck;

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,pass);
    

    if (email == "parker@gmail.com" && pass == "password") {
         
        return false;
    } else {
        promise.catch(e=> console.log(e.message));
        if(email != "parker@gmail.com") {
            errorCheck = 1;
        }
        if (pass != "password") {
            errorCheck = 2;
        }
        if (email != "parker@gmail.com" && pass != "password") {
            errorCheck = 3;
        }
        switch (errorCheck) {
            case 1:
                $("#wrong1").show();
                break;
            case 2:
                $("#wrong2").show();
                break;
            case 3:
                $("wrong1").show();
                $("wrong2").show();
                break;
        
            default:
                break;
        }
        return false;
    }
}

function checkSignUp() {
    $("#wrong1").hide();
    $("#wrong2").hide();
    $("#error1").hide();
    $("#error2").hide();
    var email = $("#signUpEmail").val();
    var pass = $("#pass1").val();
    var confirmPass = $("#pass2").val();
    var errorCheck;
    console.log(pass);
    console.log(confirmPass);

    //obtain all db user records to make sure user isn't in system
    //or hardcode email = parker@gmail.com, pass = password

    if (email == "parker@gmail.com" && pass == "password" && confirmPass == "password" && pass.length >= 8) {
        window.location.href = "dashboard.html";
        return false;
    }
    
    else {
        if(pass != confirmPass) {
            errorCheck = 1;
        }
        if (pass.length < 8) {
            errorCheck = 2;
        }
        if (pass.length < 8 && pass != confirmPass) {
            errorCheck = 3;
        }


        switch (errorCheck) {
            case 1:
                $("#error1").show();
                break;
            case 2:
                $("#error2").show();
                break;
            case 3:
                $("#error1").show();
                $("#error2").show();
                break;
        
            default:
                break;
        }
        return false;
    }
    
}

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
    }
})

