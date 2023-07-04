const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');
const deleteAllButton = document.getElementById('delete-all');

// Function to fetch a random GIF based on user search
async function fetchRandomGif(searchTerm) {
  try {
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const imageUrl = data.data.images.original.url;
    return imageUrl;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Function to create a GIF item element
function createGifItemElement(imageUrl) {
  const gifItem = document.createElement('div');
  gifItem.classList.add('gif-item');

  const img = document.createElement('img');
  img.src = imageUrl;
  gifItem.appendChild(img);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  gifItem.appendChild(deleteButton);

  return gifItem;
}

// Function to handle form submission
async function handleFormSubmit(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    const imageUrl = await fetchRandomGif(searchTerm);
    if (imageUrl) {
      const gifItem = createGifItemElement(imageUrl);
      gifContainer.appendChild(gifItem);
      searchInput.value = '';
    }
  }
} 