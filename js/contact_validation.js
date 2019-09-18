$("#btn-submit").click(function(){
   var name = $("#name").val();
    var email = $("#email").val();
     var message = $("#message").val();
    
    if(email == ""){
        $(".email-error").show();
        $("#emailerror").text("Please enter email");
    }
    
    if(email != ""){
       $(".email-error").hide();
       }
    if(name == ""){
        $(".names-error").show();
        $("#name-error").text("Please enter name");
    }
    
    if(name != ""){
       $(".names-error").hide();
       }
    if(message == ""){
        $(".message-error").show();
        $("#message-error").text("Please enter message");
    }
    
    if(message != ""){
       $(".message-error").hide();
       }
});