const router = require('express').Router();
const booksController = require("../../controllers/booksController");

// need to tie these to the controllers
//.get()
//.post()
router.route("/")
.get(booksController.findAll)
.get(booksController.create);

//.delete()

//* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
//* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.
router
.route("/:id")
.get(booksController.findAll)
.put(booksController.create)
.delete(booksController.remove);


module.exports = router;


// Example from Project - JSG 
// also used the book project in MERN
//Add the following Express routes for your app:
// README
//* `/api/books` (get) - Should return all saved books as JSON.
//* `/api/books` (post) - Will be used to save a new book to the database.
