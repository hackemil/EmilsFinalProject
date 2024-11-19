let username = JSON.parse(localStorage.getItem("loggedInUsername")) || ""

document.getElementById("display").innerHTML = "Hello  " + username







let goToMyComputerPage = document.getElementById("goToMyComputerPage")
let shoppingPage = document.getElementById("shoppingPage")
let logOutBtn = document.getElementById("logOutBtn")
let registerBtn = document.getElementById("registerBtn")



if (username.length > 0)  {
    registerBtn.style.display = "none"
} else {
    logOutBtn.style.display = "none"
    goToMyComputerPage.style.display = "none"   
}



















logOutBtn.addEventListener("click", function(){
    localStorage.removeItem("loggedInUsername")
    window.location.href = "HomePage.html"
})










$("#goToMyComputerPage").click(function () {
    window.location.href = "new.html"

})




$("#registerBtn").click(function () {
    window.location.href = "register.html"

})

$("#shoppingPage").click(function () {
    window.location.href = "shopping.html"

})

