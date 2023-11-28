import '/index.css';
import { DateTime } from 'luxon';
import Library from '/modules/Library.js';
import Book from '/modules/Book.js';
import {
  bookCollection,
  bookForm,
  bookTitleInput,
  bookAuthorInput,
  mobileNavToggle,
  navigation,
  navigationLinks,
  bookListLink,
  bookCreateLink,
  bookList,
  bookCreate,
  contactUs,
  dateTime,
} from '/modules/variables.js';

dateTime.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

const bookLibrary = new Library();

bookLibrary.books.forEach((book) => {
  bookLibrary.renderBook(book);
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  if (!bookTitle || !bookAuthor) return;
  const newBook = new Book(bookTitle, bookAuthor);
  bookLibrary.addBook(newBook);
  bookLibrary.renderBook(newBook);
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
  bookCreateLink.removeAttribute('aria-current');
  bookCreateLink.classList.remove('text-blue-700');
  bookCreate.classList.add('hidden');
  contactUs.classList.add('hidden');
  bookListLink.setAttribute('aria-current', 'page');
  bookListLink.classList.add('text-blue-700');
  bookListLink.classList.remove('text-gray-900');
  bookList.classList.remove('hidden');
});

bookCollection.addEventListener('click', (event) => {
  if (!event.target.matches('[data-button-delete]')) return;
  const parent = event.target.closest('#bookWrapper');
  const { bookId } = parent.dataset;
  parent.remove();
  bookLibrary.removeBook(bookId);
});

navigationLinks.forEach((navLink) => {
  navLink.addEventListener('click', (event) => {
    const clickedLink = event.target;
    if (clickedLink.id === 'list') {
      bookList.classList.remove('hidden');
      bookCreate.classList.add('hidden');
      contactUs.classList.add('hidden');
    } else if (clickedLink.id === 'create') {
      bookCreate.classList.remove('hidden');
      bookList.classList.add('hidden');
      contactUs.classList.add('hidden');
    } else if (clickedLink.id === 'contact') {
      contactUs.classList.remove('hidden');
      bookList.classList.add('hidden');
      bookCreate.classList.add('hidden');
    }
    navigationLinks.forEach((otherLink) => {
      if (otherLink !== clickedLink) {
        otherLink.removeAttribute('aria-current');
        otherLink.classList.remove('text-blue-700');
        otherLink.classList.add('text-gray-900');
      }
    });
    clickedLink.setAttribute('aria-current', 'page');
    clickedLink.classList.add('text-blue-700');
    clickedLink.classList.remove('text-gray-900');
    navigation.classList.toggle('hidden');
  });
});

mobileNavToggle.addEventListener('click', () => {
  navigation.classList.toggle('hidden');
});
