/** @format */

const bookCollection = document.querySelector('#bookCollection');
const bookForm = document.querySelector('#bookForm');
const bookTitleInput = document.querySelector('#bookTitle');
const bookAuthorInput = document.querySelector('#bookAuthor');
const bookTemplate = document.querySelector('#bookTemplate');

const mobileNavToggle = document.getElementById('navbar-toggle');
const navigation = document.getElementById('navbar-sticky');
const navigationLinks = document.querySelectorAll('li > a');
const bookListLink = document.getElementById('list');
const bookCreateLink = document.getElementById('create');

const bookList = document.querySelector('#bookList');
const bookCreate = document.querySelector('#bookCreate');
const contactUs = document.querySelector('#contactUs');

const dateTime = document.querySelector('#dateTime');

export {
  bookCollection,
  bookForm,
  bookTitleInput,
  bookAuthorInput,
  bookTemplate,
  mobileNavToggle,
  navigation,
  navigationLinks,
  bookListLink,
  bookCreateLink,
  bookList,
  bookCreate,
  contactUs,
  dateTime,
};
