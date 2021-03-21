// used the code example from MERN 21 - 05 for starter code

import axios from "axios";

export default {
  // Gets all books
  searchBooks: function(book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+book);
  },
  // Gets the book with the given id
  getBooks: function(bookData) {
    return axios.get("/api/books/" );
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
