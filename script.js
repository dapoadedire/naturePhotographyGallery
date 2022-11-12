import { images } from "./images.js";



const notFoundImageSRC = "assets/images/notfound.png";
const cardContainer = document.querySelector(".container");
const loadMoreButton = document.querySelector("#load-more");
const cardCountElem = document.querySelector(".card-count");
const cardTotalElem = document.querySelector(".card-total");


const createImage = (image) => {
    const div = document.createElement("div");
    div.classList.add("image");
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    const img = document.createElement("img");
    figcaption.textContent = image.alt;
    img.src = image.src;
    // img.src = `https://res.cloudinary.com/dapoadedire/image/fetch/${image.src}`;
    img.alt = image.alt;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);
    cardContainer.appendChild(div);
};




const cardLimit = images.length;
cardTotalElem.innerHTML = cardLimit;




const checkDevice = () => {
    const width = window.innerWidth;
    if (width < 768) {
        return 4;
    } else if (width < 992) {
        return 6;
    }
     return 8;
};


const cardIncrease = checkDevice();
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

const handleButtonStatus = () => {
    if (pageCount === currentPage) {
        loadMoreButton.classList.add("disabled");
        loadMoreButton.setAttribute("disabled", true);
        loadMoreButton.innerHTML = "No more images";
    }
};

const checkImage = (img) => {
    img.onerror = function () {
        this.src = notFoundImageSRC;
    };
};


const addCards = (pageIndex) => {
    currentPage = pageIndex;
    handleButtonStatus();
    const startRange = (pageIndex - 1) * cardIncrease;
    const endRange =
        currentPage === pageCount ? cardLimit : pageIndex * cardIncrease;
    cardCountElem.innerHTML = endRange;
    for (let i = startRange + 1; i <= endRange; i++) {
        createImage(images[i - 1]);
    }
    const imagesElem = document.querySelectorAll(".image img");
    imagesElem.forEach((img) => {
        checkImage(img);
    }
    );
};




document.getElementById("year").innerHTML = new Date().getFullYear();


window.onload = function () {
    addCards(currentPage);
    loadMoreButton.addEventListener("click", () => {
        addCards(currentPage + 1);
    });
};





// https://res.cloudinary.com/dapoadedire/image/upload/v1668264029/nature-photos/img1_ydjt5t.jpg