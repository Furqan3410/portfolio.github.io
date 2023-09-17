const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

function searchBooks() {
  const searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    alert('Please enter a book title or author.');
    return;
  }

  const googleBooksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`;

  axios.get(googleBooksApiUrl)
    .then(response => {
      const books = response.data.items;
      displayBooks(books);
    })
    .catch(error => {
      console.error('Error fetching book data:', error);
      alert('Unable to fetch book data. Please try again later.');
    });
}

function displayBooks(books) {
  bookList.innerHTML = '';

  if (!books || books.length === 0) {
    bookList.innerHTML = '<p>No books found.</p>';
    return;
  }

  books.forEach(book => {
    const bookInfo = book.volumeInfo;
    const title = bookInfo.title;
    const authors = bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author';
    const thumbnail = bookInfo.imageLinks ? bookInfo.imageLinks.smallThumbnail : 'no-image.jpg';
    const description = bookInfo.description || 'No description available';

    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <img src="${thumbnail}" alt="Book cover">
      <h2>${title}</h2>
      <p><strong>Author(s):</strong> ${authors}</p>
      <p>${description}</p>
    `;

    bookList.appendChild(bookElement);
  });
}
