// Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");

var bodyParser = require('body-parser')



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

// Sets up the Express app to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("./public"));


// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require('./routes/routes')(app)

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
