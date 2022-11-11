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
{/* <figure>
    <img src="/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure> */}


const createImage = (image) => {
    const div = document.createElement('div');
    const figure = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    const img = document.createElement('img');
    figcaption.textContent = image.alt;
    div.classList.add('image');
    img.src = image.src;
    img.alt = image.alt;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    return div;
}

console.dir(createImage(images[0]));

images.forEach(image => {
    container.appendChild(createImage(image));
}
)

console.log(container);


document.querySelectorAll('img').forEach(img => img.onerror = function() {
    this.src = 'assets/images/notfound.png';
})


