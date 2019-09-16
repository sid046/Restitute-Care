$(document).ready(function () {
  $("#btn").click(function () {
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
      signIn(email,pass);
    }
    
  });
});


function signIn(Email, Password) {
  firebase.auth().signInWithEmailAndPassword(Email, Password).then(function () {
    window.location.href = "Home.html";
  }).catch(function (error) {
    var message = error.message;
    alert(message);
  });
}