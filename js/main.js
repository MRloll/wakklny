$(function(){

    // ===========================
    // ======== Form Validation===
    //============================
    let form = $("form"),
        emailREgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function isEmailAddress(str) {
        return str.match(emailREgx);    
    }

    function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
        return true;
    }
    
    $("form #phoneNom").on("keypress ", function(event) {
        return isNumberKey(event)
    })

    $("form input").on("keypress blur", function(e) {
        if(e.target.id == "name" && $("#name").val().length >= 4) {
            $("#name").removeClass("is-invalid").addClass("is-valid")
        }
        
        if(e.target.id == "phoneNom" && $("#phoneNom").val().length == 9) {
            $("#phoneNom").removeClass("is-invalid").addClass("is-valid")
        }

        if(e.target.id == "email" && isEmailAddress($("form #email").val())) {
            $("#email").removeClass("is-invalid").addClass("is-valid")
        }
    })

    $(form).on("submit", function(e) {
        for (let i = 0; i < $("form input").length; i++) {            

            if(!isEmailAddress($("form #email").val())) {
                $("form #email").addClass("is-invalid");
                e.preventDefault()
            }

            if($("form input")[i].id == "name" && $("form #name").val().length < 5) {
                $("form #name").addClass("is-invalid");
                e.preventDefault();
            }

            if($("form input")[i].id == "phoneNom" && $("#phoneNom").val().length < 9) {
                $("#phoneNom").addClass("is-invalid");
                e.preventDefault();
            }
        }
    });

    // =========================
    // cahnging modal content
    // =========================

    // services content
    $(".advantages").on("click", function() {
        $("#service-content").show();
    });

    $("button.service-content-close").on("click", function() {
        $("#service-content").fadeOut();
    });

    // packages content
    $(".packages button").on("click", function() {
        $("#package-content").show();
        console.log("yes")
    });

    $("button.package-content-close").on("click", function() {
        $("#package-content").fadeOut();
    });


    
});

