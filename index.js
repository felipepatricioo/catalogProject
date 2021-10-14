const express = require('express');
const path = require("path");
require('dotenv').config();
const db = require("./models/database")

const app = express();
const port =  process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/views/public")));
app.use(express.urlencoded({ extended: true }));


app.get("/delete", (req, res) => {
    res.render("../views/delete");
  });


app.get("/create", (req, res) => {
    res.render("../views/create");
  });


app.get("/update", (req, res) => {
    res.render("../views/update");
  });


app.get("/read", (req, res) => {
    res.render("../views/read");
  });


app.get("/", (req, res) => {

  res.render('index.ejs')
})

db.connected()
app.listen(port, () =>
  console.log(`Server listening in http://localhost:${port}`));