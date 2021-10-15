const express = require('express');
const path = require("path");
require('dotenv').config();
const db = require("./models/database");
const albums = require("./models/albums");

const app = express();
const port =  process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/views/public")));
app.use(express.urlencoded({ extended: true }));

let message = ""

app.get("/create", (req, res) => {
  
  setTimeout(() => {    
    message = "";  
  }, 1000);

    res.render("../views/create", {message: message});
})

app.post('/create', async (req,res) =>{
    const { album_name, artist_name, release_date, album_cover} = req.body;
    const albums2 = await albums.create({
        album_name:album_name,
        artist_name:artist_name,
        release_date:release_date,
        album_cover:album_cover,
});
  message = "Album sucessfully updated!"
res.render("../views/create", {message: message})
});



app.get('/read', async (req,res) => {
  const albums1 = await albums.findAll();
  res.render("../views/read", {albums1: albums1});
});

app.get('/update/:id', async (req,res) => {
  const albums4 = await albums.findByPk(req.params.id);
  res.render("../views/update", {albums4: albums4});
});


app.post('/update/:id', async (req,res) =>{
  const albums4 = await albums.findByPk(req.params.id);
  const { album_name, artist_name, release_date, album_cover} = req.body;

  albums4.album_name = album_name;
  albums4.artist_name = artist_name;
  albums4.release_date = release_date;
  albums4.album_cover = album_cover;

  await albums4.save();

  res.redirect("/read");

});


app.get('/delete/:id', async (req,res) => {
  const albums5 = await albums.findByPk(req.params.id);

  await albums5.destroy();

  res.redirect("/read");

});

app.get("/", (req, res) => {
  res.render('index.ejs')
})

db.connected()
app.listen(port, () =>
  console.log(`Server listening in http://localhost:${port}`));