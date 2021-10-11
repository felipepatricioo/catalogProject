const express = require('express');
const path = require("path");

const app = express();
const port =  process.env.PORT || 3000

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


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
    res.render("../views/details");
  });


app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () =>
  console.log(`Server listening in http://localhost:${port}`));