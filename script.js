const images = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt : 'image1'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt : 'image2'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt : 'image3'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt : 'image4'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt : 'image1'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt : 'image2'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt : 'image3'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1556740732-21e6bd3ab135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt : 'image4'
    },

]

const container = document.querySelector('.container');


// Create a div with class name image
// Create a figure element
// Create a figcaption element
// Create an img element

// Set the src and alt attributes of the img element
// Set the textContent of the figcaption element

// Append the img element to the figure element
// Append the figcaption element to the figure element
// Append the figure element to the div element

// Return the div element

const createImage = (image) => {
    const div = document.createElement('div');
    div.classList.add('image');


    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const img = document.createElement('img');
    figcaption.textContent = image.alt;
   
    img.src = image.src;
    img.alt = image.alt;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    return div;
}



// Loop through the images array
// Create an image element for each image

images.forEach(image => {
    container.appendChild(createImage(image));
}
)


//  Check if the image is loaded or not
//  ANd add another image.



const notFoundImageSRC = "assets/images/notfound.png";


document.querySelectorAll('img').forEach(img => img.onerror = function() {
    this.src = notFoundImageSRC
    return;
    ;
}
)






