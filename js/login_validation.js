function validateEmail(sEmail) {

    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (filter.test(sEmail)) {

        return true;

    }

    else {

        return false;

    }

}

$(document).ready(function() {
$("#btn").click(function(){
    var email = $("#email").val();
    var pass = $("#password").val();
     
    
    if(email == ""){
        $(".name-error").show();
        $("#email-error").text("Please enter email");
    }
    else if(validateEmail(email)){
        $(".name-error").show();
        $("#email-error").text("Please enter valid email");
    }
    if(email != ""){
       $(".name-error").hide();
       }
   
    else if(pass==""){
        $(".pass-error").show();
        $("#pass-error").text("Please enter password");
        }
     if(pass != ""){
        $(".pass-error").hide();
    }
});
});