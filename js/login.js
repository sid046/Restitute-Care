var cooki =getCookie("userID");
// alert(cooki);
if(cooki != ""){
   window.location.href = "Home.html";
}

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
    setCookie("userID",userID);
    document.cookie="userID ="+userID+"; max-age="+60*60;   
    window.location.href = "Home.html";
  }).catch(function (error) {
    var message = error.message;
   
    $("#LogIn").attr("disabled", false);
    $(".spinner-border").hide();
    $('#my-error').addClass("alert alert-danger").text(message).show();
    // alert(message);
  });
}



function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + ( 60 * 60 ));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}