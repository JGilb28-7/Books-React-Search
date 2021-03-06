const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

//. Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Send every other request to the React app


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});