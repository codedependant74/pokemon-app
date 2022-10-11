const express = require("express");
const pokemon = require("./models/pokemon.js");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render(`Index`, { pokemon: pokemon });
});

app.get("/pokemon/new", (req, res) => {
  res.render("New", { pokemon: pokemon });
});

app.get("/pokemon/_id/edit", (req, res) => {
  const { id } = req.params;
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  res.render(`Show`, { pokemon: pokemon[id] });
});

app.post(`/pokemon`, (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

app.put("/pokemon/edit", (req, res) => {
  const { id } = req.params;
  pokemon[id].push(req.body);
  res.redirect("/pokemon");
});

app.listen(PORT, () => {
  console.log("Listening on Port:", PORT);
});
