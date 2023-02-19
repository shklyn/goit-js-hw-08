import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');

galleryEl.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<a class="gallery__item" href="${current.original}">
  <img class="gallery__image" src="${current.preview}" alt="${current.description}" />
</a> `,
  ''
);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
