let loginBtn = document.getElementById("loginBtn")
let users = JSON.parse(localStorage.getItem("users")) || [];
let userFound = false

loginBtn.addEventListener("click", function () {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    users.forEach(user => {
        if (user.email === email && user.password === password) {
            alert("Logged in succesfully!")
            localStorage.setItem("loggedInUsername", JSON.stringify(user.username))
            userFound = true
            window.location.href = "HomePage.html"


            


        }



    });


})
















$("#goToSignIn").click(function () {
    window.location.href = "register.html"

});




$("#email").change(function () {
    if ($("#email").val().length === 0) {         
        $("#email").removeClass("is-valid").addClass("is-invalid");
    } else {
        $("#email").removeClass("is-invalid").addClass("is-valid");
    }
 
 
 });

 $("#password").change(function () {
    if ($("#password").val().length === 0) {         
        $("#password").removeClass("is-valid").addClass("is-invalid");
    } else {
        $("#password").removeClass("is-invalid").addClass("is-valid");
    }
 
 
 });