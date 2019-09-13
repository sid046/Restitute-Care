alert("message");
// adding the update info to the database
$('#btn').click(function () {
  var Name = $("#name").val();
  var Email = $("#email").val();
  var Phone = $("#phone").val();
  var DOB = $("#datepicker").val();
  var Password = $("#pass").val();
  var Conf_Password = $("#Conf_pass").val();

  CreateUser(Email,Conf_Password,Name,DOB,Phone);
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
      Date_of_birth:DOB,
      UserType: "Customer",
    });
  }).then(function () { 
    alert("successfully Registerd.");
   }).catch(function (error) {
    var errorMessage = error.message;
    alert(errorMessage);
  });
}