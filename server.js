var express = require("express");
var bodyParser = require("body-parser");

app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5000, process.env.IP, () => {
  console.log("Connected to server");
});
