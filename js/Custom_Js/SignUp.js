$("#signbtn").click(function () {

  var name = $("#fullname").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var dob = $("#datepicker").val();
  var pass = $("#pass").val();
  var Cpass = $("#conpass").val();
  if (name != "") {
    $(".name-error").hide();
  }
  if (email != "") {
    $(".email-error").hide();
  }
  if (phone != "" || phone.length == 10) {
    $(".phone-error").hide();
  }
  if (dob != ""|| dob == Cpass) {
    $(".dob-error").hide();
  }
  if (pass != "") {
    $(".password-error").hide();
  }


  if (name == "") {
    $(".name-error").show();
    $("#name-error").text("Please enter name");
  }
  else if (email == "") {
    $(".email-error").show();
    $("#email-error").text("Please enter email"); 
  }
  else if (phone == "") {
    $(".phone-error").show();
    $("#phone-error").text("Please enter phone");
  }
  else if (phone.length !=10) {
    $(".phone-error").show();
    $("#phone-error").text("Please enter valid phone no.");
  }
  else if (dob == "") {
    $(".dob-error").show();
    $("#dob-error").text("Required!!");
  }
  else if (pass =="") {
    $(".password-error").show();
    $("#password-error").text("Required");
  }
  else if (Cpass =="") {
    $(".conPass-error").show();
    $("#conPass-error").text("Required");
  }
  else if (Cpass != pass) {
    $(".conPass-error").show();
    $("#conPass-error").text("Password not matched");
  }
  else{
    $("#signbtn").attr("disabled", true);
    $(".spinner-border").show();
    CreateUser(email,Cpass,name,dob,phone);
  }
  
});

// function to create user 
function CreateUser(email, Conf_Password, Name, DOB, Phone) {
  firebase.auth().createUserWithEmailAndPassword(email, Conf_Password).then(function () {
    var user = firebase.auth().currentUser;
    var userID = user.uid;
    alert(userID);
    var URef = firebase.database().ref().child("User_Details").child(userID);
    URef.set({
      Name: Name,
      Email: email,
      Mobile: Phone,
      Date_of_birth: DOB,
      UserType: "Customer",
    });
  }).then(function () {
    alert("User Created successfuly now you can login");
    window.location.href = "index.html";
  }).catch(function (error) {
    var errorMessage = error.message;
    // alert(errorMessage);
    $('#my-error').addClass("alert alert-danger").text(errorMessage).show();
  });
}