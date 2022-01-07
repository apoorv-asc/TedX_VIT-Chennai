var express = require("express");
var bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));


// <-------------- Navigation Routes -------------->
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/tedcircles", (req, res) => {
  res.render("tedcircles");
});

app.get("/editions", (req, res) => {
  res.render("editions");
});

app.get("/speakers", (req, res) => {
    res.render("speakers");
});

app.listen(5000, process.env.IP, () => {
  console.log("Connected to server on Port 5000");
});
