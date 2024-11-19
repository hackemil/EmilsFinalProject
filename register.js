let signUpBtn = document.getElementById("SignInBtn");
let goToLoginBtn = document.getElementById("goToLogIn");
let users = JSON.parse(localStorage.getItem("users")) || [];


$("#SignInBtn").click(function () {
   let Email = $("#email").val()
   let PhoneNumber = $("#phoneNumber").val()
   let Username = $("#username").val()
   let Password = $("#password").val() 


   let newUser = {
      email: Email, 
      username: Username,
      password: Password,
      phoneNumber:PhoneNumber,

   };

   users.push(newUser);
   localStorage.setItem("users", JSON.stringify(users));
   alert("Пользователь успешно зарегистрирован!");
   window.location.href = "index.html"
});

goToLoginBtn.addEventListener("click", function () {
   window.location.href = "index.html";
});


$("#email").change(function () {
   if ($("#email").val().length === 0) {        
       $("#email").removeClass("is-valid").addClass("is-invalid");
   } else {
       $("#email").removeClass("is-invalid").addClass("is-valid");
   }


});


$("#phoneNumber").change(function () {
   if ($("#phoneNumber").val().length === 0) {     
       $("#phoneNumber").removeClass("is-valid").addClass("is-invalid");
   } else {
       $("#phoneNumber").removeClass("is-invalid").addClass("is-valid");
   }


});




$("#username").change(function () {
   if ($("#username").val().length === 0) {         
       $("#username").removeClass("is-valid").addClass("is-invalid");
   } else {
       $("#username").removeClass("is-invalid").addClass("is-valid");
   }


});



$("#password").change(function () {
   if ($("#password").val().length === 0) {
       $("#password").removeClass("is-valid").addClass("is-invalid");
   } else {
       $("#password").removeClass("is-invalid").addClass("is-valid");
   }


});






































$("#goToLogIn").click(function () {
   window.location.href = "index.html"

})