const images = document.querySelectorAll('.art-showcase img');
const body = document.querySelector('body');

images.forEach((image) => {
  image.addEventListener('click', handleClick)
});

body.addEventListener('click', closeAllImages);

function handleClick(e) {
  images.forEach((image) => {
    if (image != e.target) {
      image.classList.remove('opened');
    }
  });
  e.target.classList.toggle('opened');
  e.stopPropagation();
}

function closeAllImages() {
  images.forEach((image) => {
    image.classList.remove('opened');
  });
}

