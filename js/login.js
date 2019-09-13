
$("#btn").click(function () {
  var Email = $("#email").val();
  var Password = $("#password").val();
  signIn(Email, Password);
});


//sign in function
function signIn(Email, Password) {
  firebase.auth().signInWithEmailAndPassword(Email, Password).then(function () {
    window.location.href = "Home.html";
  }).catch(function (error) {
    var message = error.message;
    alert(message);
  });
}