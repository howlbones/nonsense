const images = [...document.querySelectorAll('.image-showcase__img')];

images.forEach((image) => {
  image.addEventListener('click', (evt) => {
    evt.target.classList.toggle('image-showcase__img_opened');
    evt.stopPropagation();
  })
})
