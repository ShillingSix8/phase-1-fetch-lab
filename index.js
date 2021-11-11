const fetchBooks = async () => {
  const response = await fetch('https://anapioficeandfire.com/api/books');
  const data = await response.json();
  return renderBooks(data);
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


