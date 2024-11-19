let computersTable = JSON.parse(localStorage.getItem("compTable")) || []
let addComputer = document.getElementById("addComp")


addComputer.addEventListener("click", function () {
  let brandOfComp = document.getElementById("brandOfComp")
  let modelOfComp = document.getElementById("modelOfComp")
  let aboutOfComp = document.getElementById("aboutOfComp")
  let priceOfComp = document.getElementById("priceOfComp")
  let imageOfComp = document.getElementById("imageOfComp")
  let coreOfComp = document.getElementById("coreOfComp")
  let memoryOfComp = document.getElementById("memoryOfComp")
  let driveOfComp = document.getElementById("driveOfComp")
  let fanOfComp = document.getElementById("fanOfComp")
  let baysOfComp = document.getElementById("baysOfComp")
  let soundcardOfComp = document.getElementById("soundcardOfComp")
  let ssdOfComp = document.getElementById("ssdOfComp")


  let newComputer = {
    brandOfComp: brandOfComp.value,
    modelOfComp: modelOfComp.value,
    aboutOfComp: aboutOfComp.value,
    priceOfComp: priceOfComp.value,
    imageOfComp: imageOfComp.value,
    coreOfComp: coreOfComp.value,
    memoryOfComp: memoryOfComp.value,
    driveOfComp: driveOfComp.value,
    fanOfComp: fanOfComp.value,
    baysOfComp: baysOfComp.value,
    soundcardOfComp: soundcardOfComp.value,
    ssdOfComp: ssdOfComp.value,



  }

  computersTable.push(newComputer)

  localStorage.setItem("compTable", JSON.stringify(computersTable))
  window.location.href = "new.html"


})

function renderitem() {
  document.getElementById("tableBody").innerHTML = ""
  computersTable.forEach((computer, index) => {
    let newRow = ` 
       <tr>
        <th id="row">${index + 1}</th>
        <td class="brandOfComp">${computer.brandOfComp}</td>
        <td class="priceOfComp">${computer.priceOfComp}</td>

        <td>
          <button type="button" id="" class="btn btn-light showImageBtn " data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <img style= "width: 200px;" class="imageOfComp" src="${computer.imageOfComp}"
              alt="">
          </button>
        </td>
        <td>
          <button type="button"  class="btn btn-primary editSaveButtons" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            Edit
          </button>
          <button class="btn btn-danger deleteRowBtns">
            Delete
          </button>
        </td>

     <td>
        <td class="d-none memoryOfComp">${computer.memoryOfComp}</td>
        <td class="d-none modelOfComp">${computer.modelOfComp}</td>
        <td class="d-none aboutOfComp">${computer.aboutOfComp}</td>
        <td class="d-none ssdOfComp">${computer.ssdOfComp}</td>
        <td class="d-none coreOfComp">${computer.coreOfComp}</td>
        <td class="d-none fanOfComp">${computer.fanOfComp}</td>
        <td class="d-none driveOfComp">${computer.driveOfComp}</td>
        <td class="d-none baysOfComp">${computer.baysOfComp}</td>
        <td class="d-none soundcardOfComp">${computer.soundcardOfComp}</td>

</td>




      </tr>
`

    document.getElementById("tableBody").innerHTML += newRow



  });
}





renderitem()



let mySelect = document.getElementById("mySelect")

mySelect.addEventListener("change", function () {
  if (this.value === "down") {
    computersTable.sort((a, b) => a.priceOfComp - b.priceOfComp);
  } else {
    computersTable.sort((a, b) => b.priceOfComp - a.priceOfComp);
  }
  renderitem(computersTable);

});

let showImageBtn = document.querySelectorAll(".showImageBtn");

showImageBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    document.getElementById("modalDisplayImage").src = btn.querySelector(".imageOfComp").src
  })
});

let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", function () {
    let search = searchInput.value.toLowerCase();
    let rows = document.querySelectorAll(".tableBody tr");

    rows.forEach(row => {
        if (row.textContent.toLowerCase().includes(search)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
       }
  });
});





let deleteRowBtns = document.querySelectorAll(".deleteRowBtns")

deleteRowBtns.forEach(deleteBtn => {

  deleteBtn.addEventListener("click", function () {

        let brandOfComp = this.parentElement.parentElement.querySelector(".brandOfComp").textContent

        let computers = JSON.parse(localStorage.getItem("compTable")) || []

        let updatedArray = computers.filter(item =>item.brandOfComp !== brandOfComp)

        localStorage.setItem("compTable", JSON.stringify(updatedArray))

        this.parentElement.parentElement.remove()

    })

})

let tr = document.getElementById("row")
let editSaveButtons = document.querySelectorAll(".editSaveButtons")


editSaveButtons.forEach(editSaveButton => {
    editSaveButton.addEventListener("click", function () {
      let brandOfCompEdit = document.getElementById("brandOfCompEdit")
      let modelOfCompEdit = document.getElementById("modelOfCompEdit")
      let aboutOfCompEdit = document.getElementById("aboutOfCompEdit")
      let priceOfCompEdit = document.getElementById("priceOfCompEdit")
      let imageOfCompEdit = document.getElementById("imageOfCompEdit")
      let coreOfCompEdit = document.getElementById("coreOfCompEdit")
      let memoryOfCompEdit = document.getElementById("memoryOfCompEdit")
      let driveOfCompEdit = document.getElementById("driveOfCompEdit")
      let fanOfCompEdit = document.getElementById("fanOfCompEdit")
      let baysOfCompEdit = document.getElementById("baysOfCompEdit")
      let soundcardOfCompEdit = document.getElementById("soundcardOfCompEdit")
      let ssdOfCompEdit = document.getElementById("ssdOfCompEdit")

        let tr = this.parentElement.parentElement

        brandOfCompEdit.value = tr.querySelector(".brandOfComp").textContent
        modelOfCompEdit.value = tr.querySelector(".modelOfComp").textContent
        aboutOfCompEdit.value = tr.querySelector(".aboutOfComp").textContent
        priceOfCompEdit.value = tr.querySelector(".priceOfComp").textContent
        imageOfCompEdit.value = tr.querySelector(".imageOfComp").src
        coreOfCompEdit.value = tr.querySelector(".coreOfComp").textContent
        memoryOfCompEdit.value = tr.querySelector(".memoryOfComp").textContent
        driveOfCompEdit.value = tr.querySelector(".driveOfComp").textContent
        fanOfCompEdit.value = tr.querySelector(".fanOfComp").textContent
        baysOfCompEdit.value = tr.querySelector(".baysOfComp").textContent
        soundcardOfCompEdit.value = tr.querySelector(".soundcardOfComp").textContent
        ssdOfCompEdit.value = tr.querySelector(".ssdOfComp").textContent

        document.getElementById("changeTableRow").setAttribute("indexOfLine", tr.rowIndex)

    })
});


let changeTableRow = document.getElementById("changeTableRow")

changeTableRow.addEventListener("click", function () {
  let brandOfCompEdit = document.getElementById("brandOfCompEdit").value
  let modelOfCompEdit = document.getElementById("modelOfCompEdit").value
  let aboutOfCompEdit = document.getElementById("aboutOfCompEdit").value
  let priceOfCompEdit = document.getElementById("priceOfCompEdit").value
  let imageOfCompEdit = document.getElementById("imageOfCompEdit").value
  let coreOfCompEdit = document.getElementById("coreOfCompEdit").value
  let memoryOfCompEdit = document.getElementById("memoryOfCompEdit").value
  let driveOfCompEdit = document.getElementById("driveOfCompEdit").value
  let fanOfCompEdit = document.getElementById("fanOfCompEdit").value
  let baysOfCompEdit = document.getElementById("baysOfCompEdit").value
  let soundcardOfCompEdit = document.getElementById("soundcardOfCompEdit").value
  let ssdOfCompEdit = document.getElementById("ssdOfCompEdit").value

    let rowIndex = document.getElementById("changeTableRow").getAttribute("indexOfLine")
    let table = document.getElementById("tableBody")
    let row = table.rows[rowIndex - 1]

    row.querySelector(".brandOfComp").textContent = brandOfCompEdit
    row.querySelector(".modelOfComp").textContent = modelOfCompEdit
    row.querySelector(".aboutOfComp").textContent = aboutOfCompEdit
    row.querySelector(".priceOfComp").textContent = priceOfCompEdit
    row.querySelector(".imageOfComp").src = imageOfCompEdit
    row.querySelector(".coreOfComp").textContent = coreOfCompEdit
    row.querySelector(".memoryOfComp").textContent = memoryOfCompEdit
    row.querySelector(".driveOfComp").textContent = driveOfCompEdit
    row.querySelector(".fanOfComp").textContent = fanOfCompEdit
    row.querySelector(".baysOfComp").textContent = baysOfCompEdit
    row.querySelector(".soundcardOfComp").textContent = soundcardOfCompEdit
    row.querySelector(".ssdOfComp").textContent = ssdOfCompEdit


    let tableComputers = JSON.parse(localStorage.getItem("compTable")) || [];


    tableComputers[rowIndex - 1] = {
        brandOfComp: brandOfCompEdit,
        modelOfComp: modelOfCompEdit,
        aboutOfComp: aboutOfCompEdit,
        priceOfComp: priceOfCompEdit,
        imageOfComp: imageOfCompEdit,
        coreOfComp: coreOfComp,
        memoryOfComp: memoryOfCompEdit,
        driveOfComp: driveOfCompEdit,
        fanOfComp: fanOfCompEdit,
        baysOfComp: baysOfCompEdit,
        soundcardOfComp: soundcardOfCompEdit,
        ssdOfComp: ssdOfComp,
        
    }

    localStorage.setItem("compTable", JSON.stringify(tableComputers))

    window.location.href = "new.html"

});




let homePageBtn = document.getElementById("homePageBtn")



homePageBtn.addEventListener("click", function () {
  window.location.href = "HomePage.html"

});



// let brandOfCompEdit = document.getElementById("brandOfCompEdit")
// let modelOfCompEdit = document.getElementById("modelOfCompEdit")
// let descOfCompEdit = document.getElementById("descOfCompEdit")
// let priceOfCompEdit = document.getElementById("priceOfCompEdit")
// let imageOfCompEdit = document.getElementById("imageOfCompEdit")
// let coreOfCompEdit = document.getElementById("coreOfCompEdit")
// let memoryOfCompEdit = document.getElementById("memoryOfCompEdit")
// let driveOfCompEdit = document.getElementById("driveOfCompEdit")
// let fanOfCompEdit = document.getElementById("fanOfCompEdit")
// let baysOfCompEdit = document.getElementById("baysOfCompEdit")
// let soundcardOfCompEdit = document.getElementById("soundcardOfCompEdit")
// let ssdOfCompEdit = document.getElementById("ssdOfCompEdit")

$("#brandOfComp").change(function () {
  if ($("#brandOfComp").val().length === 0) {
    $("#brandOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#brandOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#modelOfComp").change(function () {
  if ($("#modelOfComp").val().length === 0) {
    $("#modelOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#modelOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});

$("#descriptionOfComp").change(function () {
  if ($("#descriptionOfComp").val().length === 0) {
    $("#descriptionOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#descriptionOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});


$("#priceOfComp").change(function () {
  if ($("#priceOfComp").val().length === 0) {
    $("#priceOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#priceOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});




$("#imageOfComp").change(function () {
  if ($("#imageOfComp").val().length === 0) {
    $("#imageOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#imageOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#coreOfComp").change(function () {
  if ($("#coreOfComp").val().length === 0) {
    $("#coreOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#coreOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#memoryOfComp").change(function () {
  if ($("#memoryOfComp").val().length === 0) {
    $("#memoryOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#memoryOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#driveOfComp").change(function () {
  if ($("#driveOfComp").val().length === 0) {
    $("#driveOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#driveOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#fanOfComp").change(function () {
  if ($("#fanOfComp").val().length === 0) {
    $("#fanOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#fanOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#baysOfComp").change(function () {
  if ($("#baysOfComp").val().length === 0) {
    $("#baysOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#baysOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});

$("#soundcardOfComp").change(function () {
  if ($("#soundcardOfComp").val().length === 0) {
    $("#soundcardOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#soundcardOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});


$("#ssdOfComp").change(function () {
  if ($("#ssdOfComp").val().length === 0) {
    $("#ssdOfComp").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#ssdOfComp").removeClass("is-invalid").addClass("is-valid");
  }


});

$("#brandOfCompEdit").change(function () {
  if ($("#brandOfCompEdit").val().length === 0) {
    $("#brandOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#brandOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});

$("#modelOfCompEdit").change(function () {
  if ($("#modelOfCompEdit").val().length === 0) {
    $("#modelOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#modelOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});

$("#aboutOfCompEdit").change(function () {
  if ($("#aboutOfCompEdit").val().length === 0) {
    $("#aboutOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#aboutOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});


$("#priceOfCompEdit").change(function () {
  if ($("#priceOfCompEdit").val().length === 0) {
    $("#priceOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#priceOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#imageOfCompEdit").change(function () {
  if ($("#imageOfCompEdit").val().length === 0) {
    $("#imageOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#imageOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#coreOfCompEdit").change(function () {
  if ($("#coreOfCompEdit").val().length === 0) {
    $("#coreOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#coreOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});
$("#memoryOfCompEdit").change(function () {
  if ($("#memoryOfCompEdit").val().length === 0) {
    $("#memoryOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#memoryOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});

$("#driveOfCompEdit").change(function () {
  if ($("#driveOfCompEdit").val().length === 0) {
    $("#driveOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#driveOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});      


$("#fanOfCompEdit").change(function () {
  if ($("#fanOfCompEdit").val().length === 0) {
    $("#fanOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#fanOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }



});
$("#baysOfCompEdit").change(function () {
  if ($("#baysOfCompEdit").val().length === 0) {
    $("#baysOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#baysOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});

$("#soundcardOfCompEdit").change(function () {
  if ($("#soundcardOfCompEdit").val().length === 0) {
    $("#soundcardOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#soundcardOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});


$("#ssdOfCompEdit").change(function () {
  if ($("#ssdOfCompEdit").val().length === 0) {
    $("#ssdOfCompEdit").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#ssdOfCompEdit").removeClass("is-invalid").addClass("is-valid");
  }


});
