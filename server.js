const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets for heroku 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Send every other request to the React app


app.listen(PORT, () => {
  console.log(`🌎 ==> Server running now on port ${PORT}!`);
});
