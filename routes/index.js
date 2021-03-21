// Example from Project - JSG 
// also used the bookk project in MERN
//Add the following Express routes for your app:
//* `/api/books` (get) - Should return all saved books as JSON.
//* `/api/books` (post) - Will be used to save a new book to the database.
//* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
//* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// router.use("/api", apiRoutes);
//router.use("/employees", employeeRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
