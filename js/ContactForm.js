var userId = sessionStorage.getItem("UserID");
// alert(userId);
$("#btn-submit").click(function () {



  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();


  if (email != "") {
    $(".email-error").hide();
  }

  if (name != "") {
    $(".names-error").hide();
  }

  if (message != "") {
    $(".message-error").hide();
  }
  

  if (name == "") {
    $(".names-error").show();
    $("#name-error").text("Please enter name");
  }
  else if (email == "") {
    $(".email-error").show();
    $("#emailerror").text("Please enter email");
  }
  else if (message == "") {
    $(".message-error").show();
    $("#message-error").text("Please enter message");
  }
else{
  Contact_Data(email,name,message,userId);
     $("#btn-submit").attr("disabled", true);
    $(".spinner-border").show();
}

});

// function to create user 
function Contact_Data(email, Name, Message,userID) {
 
    var URef = firebase.database().ref().child("Contact_Us").child(userID);
    URef.set({
      Name: Name,
      Email: email,
      Message: Message,
    }).then(function () {
    alert("Thank you! we will contact you soon");
    $("#btn-submit").attr("disabled", false);
    $(".spinner-border").hide();
    
  }).catch(function (error) {
    var errorMessage = error.message;
    alert(errorMessage);
    $("#btn-submit").attr("disabled", false);
    $(".spinner-border").hide();
  });
}