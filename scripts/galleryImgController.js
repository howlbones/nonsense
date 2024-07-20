const images = [...document.querySelectorAll('.image-showcase__img')];
const portraits = [...document.querySelectorAll('.portraits__img')];
console.log('script running')
console.log(images)

images.forEach((image) => {
  image.addEventListener('click', (evt) => {
    evt.target.classList.toggle('image-showcase__img_opened');
    evt.stopPropagation();
  })
})

portraits.forEach((image) => {
  image.addEventListener('click', (evt) => {
    console.log('yes')
    evt.target.classList.toggle('image-showcase__img_opened');
    evt.stopPropagation();
  })
})
