// Header variables
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let list = document.querySelector(".header__list");
let headerName = document.querySelector(".header__name")
let moveLock = document.querySelector("body");

// Gallery variables
let galleryImages = document.querySelectorAll(".gallery__img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

// Interier variables
let interierImages = document.querySelectorAll(".interier__img");

// Close menu on icon
burger.onclick = function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	moveLock.classList.toggle("lock");
}

list.onclick = function () {
	list.classList.remove("active");
	moveLock.classList.toggle("lock");
}

headerName.onclick = function () {
	moveLock.classList.remove("lock");
}

// Close menu on link click
document.querySelectorAll(".header__name, .header__link").forEach(n => n.addEventListener("click", () => {
	burger.classList.remove("active");
	menu.classList.remove("active");
}))

// Biography readmore button
var i = 0;
function readmore() {
	if (!i) {
		document.querySelector(".biography__moretext").style.display = "inline";
		document.querySelector(".biography__button").innerHTML = "Дізнатись менше";
		i = 1;
	} else {
		document.querySelector(".biography__moretext").style.display = "none";
		document.querySelector(".biography__button").innerHTML = "Дізнатись більше";
		i = 0;
	}
}

// Gallery Images
if (galleryImages) {
	// Create onclick function for each image
	galleryImages.forEach(function (image, index) {
		image.onclick = function () {
			// Get the image URL from our element CSS
			let getElementCss = window.getComputedStyle(image);
			let getFullImgUrl = getElementCss.getPropertyValue('background-image');
			let getImgUrlPos = getFullImgUrl.split("/img/gallery/");
			let setNewImgUrl = getImgUrlPos[1].replace('")', '');

			// Save the image nr to use later with prev/next buttons
			getLatestOpenedImg = index + 1;

			// Create a popup window
			let container = document.body;
			let newImgWindow = document.createElement("div");
			container.appendChild(newImgWindow);
			newImgWindow.setAttribute("class", "img-window");
			newImgWindow.setAttribute("onclick", "closeImg()");

			// Insert image inside window
			let newImg = document.createElement("img");
			newImgWindow.appendChild(newImg);
			newImg.setAttribute("src", "img/gallery/" + setNewImgUrl);
			newImg.setAttribute("id", "current-image");

			// Prev/Next buttons
			newImg.onload = function () {
				let imgWidth = this.width;
				let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

				let newNextBtn = document.createElement("a");
				let btnNextText = document.createTextNode(">");
				newNextBtn.appendChild(btnNextText);
				container.appendChild(newNextBtn);
				newNextBtn.setAttribute("class", "img-btn-next");
				newNextBtn.setAttribute("onclick", "changeImg(1)");
				newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

				let newPrevBtn = document.createElement("a");
				let btnPrevText = document.createTextNode("<");
				newPrevBtn.appendChild(btnPrevText);
				container.appendChild(newPrevBtn);
				newPrevBtn.setAttribute("class", "img-btn-prev");
				newPrevBtn.setAttribute("onclick", "changeImg(0)");
				newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
			}
		}
	});
}

function closeImg() {
	// Remove the image window
	document.querySelector(".img-window").remove();

	// Remove the prev/next buttons
	document.querySelector(".img-btn-next").remove();
	document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
	// Remove current image
	document.querySelector("#current-image").remove();

	// Generate new image
	let getImgWindow = document.querySelector(".img-window");
	let newImg = document.createElement("img");
	getImgWindow.appendChild(newImg);

	// Set new image "src"
	let calcNewImg;
	if (changeDir === 1) {
		calcNewImg = getLatestOpenedImg + 1;
		if (calcNewImg > galleryImages.length) {
			calcNewImg = 1;
		}
	}
	else if (changeDir === 0) {
		calcNewImg = getLatestOpenedImg - 1;
		if (calcNewImg < 1) {
			calcNewImg = galleryImages.length;
		}
	}
	newImg.setAttribute("src", "img/gallery/img" + calcNewImg + ".jpg");
	newImg.setAttribute("id", "current-image");

	// Adjust our global variable "getLatestOpenedImg"
	getLatestOpenedImg = calcNewImg;

	// Change the button positions
	newImg.onload = function () {
		let imgWidth = this.width;
		let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

		let nextBtn = document.querySelector(".img-btn-next");
		nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

		let prevBtn = document.querySelector(".img-btn-prev");
		prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
	}
}

// Interier Images
if (interierImages) {
	// Create onclick function for each image
	interierImages.forEach(function (image, index) {
		image.onclick = function () {
			// Get the image URL from our element CSS
			let getElementCss = window.getComputedStyle(image);
			let getFullImgUrl = getElementCss.getPropertyValue('background-image');
			let getImgUrlPos = getFullImgUrl.split("/img/interier/");
			let setNewImgUrl = getImgUrlPos[1].replace('")', '');

			// Save the image nr to use later with prev/next buttons
			getLatestOpenedImg = index + 1;

			// Create a popup window
			let container = document.body;
			let newImgWindow = document.createElement("div");
			container.appendChild(newImgWindow);
			newImgWindow.setAttribute("class", "img-window");
			newImgWindow.setAttribute("onclick", "closeImg()");

			// Insert image inside window
			let newImg = document.createElement("img");
			newImgWindow.appendChild(newImg);
			newImg.setAttribute("src", "img/interier/" + setNewImgUrl);
			newImg.setAttribute("id", "current-image");

			// Prev/Next buttons
			newImg.onload = function () {
				let imgWidth = this.width;
				let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

				let newNextBtn = document.createElement("a");
				let btnNextText = document.createTextNode(">");
				newNextBtn.appendChild(btnNextText);
				container.appendChild(newNextBtn);
				newNextBtn.setAttribute("class", "img-btn-next");
				newNextBtn.setAttribute("onclick", "changeImgInterier(1)");
				newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

				let newPrevBtn = document.createElement("a");
				let btnPrevText = document.createTextNode("<");
				newPrevBtn.appendChild(btnPrevText);
				container.appendChild(newPrevBtn);
				newPrevBtn.setAttribute("class", "img-btn-prev");
				newPrevBtn.setAttribute("onclick", "changeImgInterier(0)");
				newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
			}
		}
	});
}

function changeImgInterier(changeDir) {
	// Remove current image
	document.querySelector("#current-image").remove();

	// Generate new image
	let getImgWindow = document.querySelector(".img-window");
	let newImg = document.createElement("img");
	getImgWindow.appendChild(newImg);

	// Set new image "src"
	let calcNewImg;
	if (changeDir === 1) {
		calcNewImg = getLatestOpenedImg + 1;
		if (calcNewImg > interierImages.length) {
			calcNewImg = 1;
		}
	}
	else if (changeDir === 0) {
		calcNewImg = getLatestOpenedImg - 1;
		if (calcNewImg < 1) {
			calcNewImg = interierImages.length;
		}
	}
	newImg.setAttribute("src", "img/interier/img" + calcNewImg + ".jpg");
	newImg.setAttribute("id", "current-image");

	// Adjust our global variable "getLatestOpenedImg"
	getLatestOpenedImg = calcNewImg;

	// Change the button positions
	newImg.onload = function () {
		let imgWidth = this.width;
		let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

		let nextBtn = document.querySelector(".img-btn-next");
		nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

		let prevBtn = document.querySelector(".img-btn-prev");
		prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
	}
}