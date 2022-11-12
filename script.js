const images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image1",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image2",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image3",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image4",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image5",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image6",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image7",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image8",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image9",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image10",
    },
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image1",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image2",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image3",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image4",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image5",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image6",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image7",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image8",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image9",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "image10",
    },

];
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
    img.alt = image.alt;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);
    cardContainer.appendChild(div);
};




const cardLimit = images.length;
cardTotalElem.innerHTML = cardLimit;


const cardIncrease = 6;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

const handleButtonStatus = () => {
    if (pageCount === currentPage) {
        loadMoreButton.classList.add("disabled");
        loadMoreButton.setAttribute("disabled", true);
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
        currentPage == pageCount ? cardLimit : pageIndex * cardIncrease;
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

