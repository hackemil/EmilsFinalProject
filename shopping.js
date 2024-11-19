let computersTable = JSON.parse(localStorage.getItem("compTable")) || []

let goToHome = document.getElementById("goToHome")
let goToMyComputers = document.getElementById("goToMyComputers")
let goToBasket = document.getElementById("goToBasket")


function MyBasket() {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    let cartCountElement = document.getElementById("cartCount");
    cartCountElement.textContent = basket.length;
}



        let shoppingComputers = [
    {
        brandOfComp: "Lenovo",
        modelOfComp: "A-34",
        descriptionOfComp: "A very strong and reliable computer",
        priceOfComp: "1999$",
        imageOfComp: "https://irshad.az/cdn-cgi/image/width=1400/storage/products/93772/lenovo-ideapad-1-15igl7-82v700curk.jpg",
        coreOfComp: 3500,
        memoryOfComp: "512GB",
        driveOfComp: "Window 11",
        fanOfComp: "512RR",
        baysOfComp: "HDD",
        soundcardOfComp: "Bang-Olufsen",
        ssdOfComp: 16,
    },
]

        let computersFromLocalStorage = JSON.parse(localStorage.getItem("compTable"));
        let mergedArrays = shoppingComputers.concat(computersFromLocalStorage).filter(computer => computer !== null && computer !== undefined);
 
             function sortByName(computers) {
                     return computers.filter(computer => computer.brandOfComp) 
                             .sort((a, b) => a.brandOfComp.localeCompare(b.brandOfComp));
                         } 


                        
function renderItem(computers) {
    document.querySelector(".card-keeper").innerHTML = "";
    computers.forEach(computer => {
        let card = `
        <div class="card" style="width: 18rem; margin: 15px;">
                        <img src="${computer.imageOfComp}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${computer.brandOfComp}</h5>
                            <p class="card-price">${computer.priceOfComp}</p>
                            <p class="card-text">${computer.descriptionOfComp}</p>
                            <button type="button" class="my-3 w-100 btn btn-outline-info viewDetailsButtons" data-bs-toggle="modal" data-bs-target="#exampleModal">View details</button>
                            <button type="button" class="w-100 btn btn-outline-success addToBasketButtons">Add to Basket</button>
                        </div>
                    </div>
        `;
        document.querySelector(".card-keeper").innerHTML += card;
    });
}

renderItem(sortByName(mergedArrays));

document.querySelectorAll("#showAllComps li").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll("#showAllComps li").forEach(li => li.classList.remove("active"));
        this.classList.add("active");

        let brandOfComp = this.textContent.trim();
        let filteredComputers = brandOfComp === "All Computers" ? mergedArrays : mergedArrays.filter(c => c && c.modelOfComp === brandOfComp);
        
        renderItem(sortByName(filteredComputers));
    });
}); 

        renderItem(sortByName(mergedArrays));

        document.querySelectorAll("#showAllComps li").forEach(item => {
            item.addEventListener("click", function () {
                document.querySelectorAll("#showAllComps li").forEach(li => li.classList.remove("active"));
                this.classList.add("active");

                let brandOfComp = this.textContent.trim();
                let filteredComputers = brandOfComp === "All Computers" ? mergedArrays : mergedArrays.filter(c => c.modelOfComp === brandOfComp);
                
                renderItem(sortByName(filteredComputers));
           });
});



// let viewDetailsButtons = document.querySelectorAll(".viewDetailsButtons")

// viewDetailsButtons.forEach(viewDetailsButton => {
//     viewDetailsButton.addEventListener("click", function () {

//         let tr = this.parentElement.parentElement


//         let getImage = tr.querySelector(".card-img-top").src

//         document.getElementById("viewImage").src = getImage


//         let getName = this.parentElement.querySelector(".card-title").textContent

//         document.getElementById("viewNameOfComputer").innerHTML = getName


//         // viewPrice viewDescription 

//         let getPrice = this.parentElement.querySelector(".card-price").textContent

//         document.getElementById("viewPrice").innerHTML = getPrice


//         let getDescription = this.parentElement.querySelector(".card-text").textContent

//         document.getElementById("viewDescription").innerHTML = getDescription


//     })
// })



// let addToBasketButtons = document.querySelectorAll(".addToBasketButtons");

// addToBasketButtons.forEach((addToBasketButton, index) => {
//     addToBasketButton.addEventListener("click", function () {
//         const computer = mergedArrays[index];
//         let basket = JSON.parse(localStorage.getItem("basket")) || [];

//         basket.push(computer);
//         localStorage.setItem("basket", JSON.stringify(basket));

       

//         alert("Kompüter səbətə əlavə edildi!")

//         MyBasket()

//     });
// });

// MyBasket()



// let myInput = document.getElementById("myInput")

// myInput.addEventListener("input", function () {

//     let searchInput = this.value.toLowerCase();
//     let filteredComputers = mergedArrays.filter(computer =>
//         computer.ad.toLowerCase().includes(searchInput) ||
//         computer.tesvir.toLowerCase().includes(searchInput)
//     );

//     renderItem(filteredComputers);
// });


goToHome.addEventListener("click", function () {
    window.location.href = "HomePage.html"
})


// goToBasket.addEventListener("click", function () {
//     window.location.href = ""
// })

goToMyComputers.addEventListener("click", function () {
    window.location.href = "new.html"
})