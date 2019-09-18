$(document).ready(function () {
  $("#LogIn").click(function () {
    var email = $("#email").val();
    var pass = $("#password").val();

    if (email != "") {
      $(".name-error").hide();
    }
   
    if (pass != "") {
      $(".pass-error").hide();
    }

    if (email == "") {
      $(".name-error").show();
      $("#email-error").text("Please enter email");
    }

    else if (pass == "") {
      $(".pass-error").show();
      $("#pass-error").text("Please enter password");
    }
    else{
      $("#LogIn").attr("disabled", true);
      $(".spinner-border").show();
      signIn(email,pass);
      $('#my-error').hide();
    }
    
  });
});


function signIn(Email, Password) {
  firebase.auth().signInWithEmailAndPassword(Email, Password).then(function () {
    
    var user = firebase.auth().currentUser;
    var userID = user.uid;
    sessionStorage.setItem("UserID", userID);    
    window.location.href = "Home.html";
  }).catch(function (error) {
    var message = error.message;
   
    $("#LogIn").attr("disabled", false);
    $(".spinner-border").hide();
    $('#my-error').addClass("alert alert-danger").text(message).show();
    // alert(message);
  });
}