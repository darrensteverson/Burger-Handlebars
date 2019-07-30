var express = require("express");
var expshandle = require("express-handlebars");
var PORT = 8080 || process.env.PORT
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// HandleBars
app.engine("handlebars", expshandle({ defaultLayout: "main" }));
app.set("view engine", "handlebars")



// Routes
var routes = require("./controllers/burgers_controller");
app.use(routes);



// Server
app.listen(PORT, function(){

    console.log("Listening on localhost " + PORT);
});
