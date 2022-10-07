import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(
    ({ preview, original, description }) => `
 <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
  )
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', createGallery);
