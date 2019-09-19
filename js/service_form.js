$("#submit").click(function (e) { 
  // e.preventDefault();
  var userID = getCookie("userID");

  var name  = $("#name").val();
  var mobile = $("#phone").val();                    
  var email = $("#email").val();                    
  var gender = $("#gender").val();                    
  var postal = $("#postal").val();                    
  var interest = $("#interest").val();                    
  var recipient_name = $("#recipient_name").val();                    
  var care = $("#care").val();                    


  if(userID != ""){

    if(name != ""){
      $("#name").css("border-bottom","1px solid #000");
      $("#name-error").hide();
    }
   if(mobile != "" || mobile.length != 10){
      $("#phone").css("border-bottom","1px solid #000");
      $("#phone-error").hide();
    }
   if(email != ""){
      $("#email").css("border-bottom","1px solid #000");
      $("#email-error").hide();
    }
   if(gender != "Select Gender"){
      $("#gender").css("border-bottom","1px solid #000");
      $("#gender-error").hide();
    }
   if(postal != ""){
      $("#postal").css("border-bottom","1px solid #000");
      $("#postal-error").hide();
    }
   if(interest != "Please choose your interest"){
      $("#interest").css("border-bottom","1px solid #000");
      $("#interest-error").hide();
    }
   if(recipient_name != ""){
      $("#recipient_name").css("border-bottom","1px solid #000");
      $("#recipient_name-error").hide();
    }
   if(care != "Please choose type of care"){
      $("#care").css("border-bottom","1px solid #000");
      $("#care-error").hide();
    }


    if(name == ""){
      $("#name").css("border-bottom","1px solid #ff8080");
      $("#name-error").text("Required!").css("color","#ff8080").show();
    }
    else if(mobile == "" || mobile.length != 10){
      $("#phone").css("border-bottom","1px solid #ff8080");
      $("#phone-error").text("Enter valid mobile number").css("color","#ff8080").show();
    }
    else if(email == ""){
      $("#email").css("border-bottom","1px solid #ff8080");
      $("#email-error").text("Enter valid mobile number").css("color","#ff8080").show();
    }
    else if(gender == "Select Gender"){
      $("#gender").css("border-bottom","1px solid #ff8080");
      $("#gender-error").text("Select gender").css("color","#ff8080").show();
    }
    else if(postal == ""){
      $("#postal").css("border-bottom","1px solid #ff8080");
      $("#postal-error").text("Postal code Required!").css("color","#ff8080").show();
    }
    else if(interest == "Please choose your interest"){
      $("#interest").css("border-bottom","1px solid #ff8080");
      $("#interest-error").text("Please choose your interest").css("color","#ff8080").show();
    }
    else if(recipient_name == ""){
      $("#recipient_name").css("border-bottom","1px solid #ff8080");
      $("#recipient_name-error").text("Care Recipient Name required!").css("color","#ff8080").show();
    }
    else if(care == "Please choose type of care"){
      $("#care").css("border-bottom","1px solid #ff8080");
      $("#care-error").text("Choose type of care!").css("color","#ff8080").show();
    }
    else{
     
     $(".spinner-border").show();
     $("#submit").attr("disabled", true);
     serviceMethod(name,mobile,email,postal,interest,recipient_name,care,userID);
    }
  }
  else{
    alert("Please login to submit the form");
    $("#submit").attr("disabled", false);
    $(".spinner-border").hide();
  }
});




// function to create user 
function serviceMethod(name, mobile, email, postal, interest,recipient_name,care,userID) {
    var URef = firebase.database().ref().child("Service_form").child(userID);
    URef.set({
      Name: name,
      Email: email,
      Mobile: mobile,
      Postal: postal,
      Interest: interest,
      Gender:gender,
      Recipient_name:recipient_name,
      Care : care
    }).then(function () {
    alert("Thank you! We will contact you soon");
    // window.location.href = "index.html";
    $("#submit").attr("disabled", false);
    $(".spinner-border").hide();

  }).catch(function (error) {
    var errorMessage = error.message;
    // alert(errorMessage);
    $("#submit").attr("disabled", false);
    $(".spinner-border").hide();
  });
}



// geting cookie 
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