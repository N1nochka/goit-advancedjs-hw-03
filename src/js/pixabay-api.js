const API_KEY = '52933898-64c235b98ac290495c49a4d77';
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Отримує масив зображень із Pixabay API за ключовим словом
 * @param {string} query - слово для пошуку
 * @returns {Promise<Array>} - масив об'єктів із зображеннями
 */
export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 20,
  });

  const url = `${BASE_URL}?${params}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();
  return data.hits; // Повертаємо лише масив із зображеннями
}
