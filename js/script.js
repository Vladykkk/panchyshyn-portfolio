"use strict";

// Header variables
const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-menu");
const list = document.querySelector(".header-list");
const headerName = document.querySelector(".header-name");
const moveLock = document.querySelector("body");

// Close menu on icon
burger.onclick = function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  moveLock.classList.toggle("lock");
};

list.onclick = function () {
  list.classList.remove("active");
  moveLock.classList.toggle("lock");
};

headerName.onclick = function () {
  moveLock.classList.remove("lock");
};

// Close menu on link click
document.querySelectorAll(".header-name, .header-link").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
  })
);

// Biography readmore button
let i = 0;

function readmore() {
  if (!i) {
    document.querySelector(".biography-more-text").style.display = "inline";
    document.querySelector(".biography-button").innerHTML = "Згорнути";
    i = 1;
  } else {
    document.querySelector(".biography-more-text").style.display = "none";
    document.querySelector(".biography-button").innerHTML = "Дізнатись більше";
    i = 0;
  }
}

// Single pruduct page

let products = null;
fetch("../products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    addDataToHTML();
  });

function addDataToHTML() {
  let listProductHTML = document.querySelector(".media-scroller");

  if (products != null) {
    products.forEach((product) => {
      let newProduct = document.createElement("a");
      newProduct.href = "../html/detail.html?id=" + product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `
		 <div class="media-element">
		 <img src="${product.image}">
		 <h2 class="title">${product.name} ${product.size} ${product.year}</h2>
		 </div>
		 `;
      listProductHTML.appendChild(newProduct);
    });
  }
}

// Form

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("form");

//   form.addEventListener("submit", formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);

//     let formData = new FormData(form);
//     formData.append("image", formImage.files[0]);

//     if (error === 0) {
//       form.classList.add("_sending");
//       let response = await fetch("sendmail.php", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         formPreview.innerHTML = "";
//         form.reset();
//         form.classList.remove("_sending");
//       } else {
//         alert("Error");
//         form.classList.remove("_sending");
//       }
//     } else {
//       alert("Fill in the required fields");
//     }
//   }

//   function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll("._req");

//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];
//       formRemoveError(input);

//       if (input.classList.contains("_email")) {
//         if (emailTest(input)) {
//           formAddError(input);
//           error++;
//         }
//       } else if (
//         input.getAttribute("type") === "checkbox" &&
//         input.checked === false
//       ) {
//         formAddError(input);
//         error++;
//       } else {
//         if (input.value === "") {
//           formAddError(input);
//           error++;
//         }
//       }
//     }
//     return error;
//   }

//   function formAddError(input) {
//     input.parentElement.classList.add("_error");
//     input.classList.add("_error");
//   }

//   function formRemoveError(input) {
//     input.parentElement.classList.remove("_error");
//     input.classList.remove("_error");
//   }

//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }

//   const formImage = document.getElementById("formImage");
//   const formPreview = document.getElementById("formPreview");

//   formImage.addEventListener("change", () => {
//     uploadFile(formImage.files[0]);
//   });

//   function uploadFile(file) {
//     if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
//       alert("Only images are allowed.");
//       formImage.value = "";
//       return;
//     }

//     if (file.size > 2 * 1024 * 1024) {
//       alert("The file must be less than 2 MB.");
//       return;
//     }

//     var reader = new FileReader();

//     reader.onload = function (e) {
//       formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
//     };

//     reader.onerror = function (e) {
//       alert("Error");
//     };

//     reader.readAsDataURL(file);
//   }
// });
