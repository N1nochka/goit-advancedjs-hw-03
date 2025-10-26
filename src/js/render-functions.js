/**
 * Створює HTML-розмітку карток із зображеннями
 * @param {Array} images
 * @returns {string} HTML-рядок
 */
export function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="card">
        <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="stats">
          <div><span>Likes</span>${likes}</div>
          <div><span>Views</span>${views}</div>
          <div><span>Comments</span>${comments}</div>
          <div><span>Downloads</span>${downloads}</div>
        </div>
      </li>`
    )
    .join('');
}

/**
 * Очищає вміст галереї
 */
export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

/**
 * Відображає передану розмітку у галереї
 * @param {string} markup
 */
export function renderGallery(markup) {
  document.querySelector('.gallery').innerHTML = markup;
}
