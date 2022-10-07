import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(
    ({ preview, original, description }) => `
    <div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
  )
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', createGallery);

// ==============================================================

galleryRef.addEventListener('click', onImageClick);

let imgInstance;

function onImageClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const urlLarge = getLargeUrl(e);

  imgInstance = basicLightbox.create(`<img src=${urlLarge}>`);
  imgInstance.show(onClickClose());

  window.addEventListener('keydown', onEscKeyClose);
}

function getLargeUrl(e) {
  return e.target.dataset.source;
}

function onEscKeyClose(e) {
  if (e.code !== 'Escape') {
    return;
  }
  imgInstance.close();
}

function onClickClose() {
  window.removeEventListener('keydown', onEscKeyClose);
}
