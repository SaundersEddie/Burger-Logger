// Server code
// Eddie Saunders saunders.eddie@outlook.com 13th May 2020

const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// require("./routes/api-routes.js");
// require("./routes/html-routes.js");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});