import { fetchImages } from './js/pixabay-api.js';
import { createGalleryMarkup, clearGallery, renderGallery } from './js/render-functions.js';
import { errorTost, infoTost } from './js/izi-toast.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements.search.value.trim();
  if (!query) {
    infoTost('Please, enter a search query!');
    return;
  }

  clearGallery();
  loader.style.display = 'block'; // показать надпись

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      loader.style.display = 'none'; // скрыть надпись
      infoTost('Sorry, there are no images matching your search query. Please try again!');
      return;
    }

    const markup = createGalleryMarkup(images);
    renderGallery(markup);

    lightbox.refresh();
  } catch (error) {
    console.error(error);
    errorTost('An error occurred while fetching images.');
  } finally {
    loader.style.display = 'none'; // скрыть надпись после загрузки
  }
}
