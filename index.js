const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let array = [];

app.get("/products", (req, res) => {
  res.send(array);
});

app.get("/products/:id", (req, res) => {
  array.forEach((item) => {
    if (item.id === req.params.id) {
      res.send(item)
    }
  });
  res.send("Não encontrado");
});

app.post("/products/new", (req, res) => {
  array.push({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
  });
  res.send("OK!");
});

app.put("/products/update/:id", (req, res) => {
  array.forEach((item) => {
    if (item.id === req.params.id) {
      if (req.body.name) item.name = req.body.name;
      if (req.body.price) item.price = req.body.price;
    }
  });
  res.send("OK!");
});

app.delete("/products/delete/:id", (req, res) => {
  array = array.filter((data) => data.id != req.params.id);
  res.send("OK!");
});

app.listen(port, () => console.log(`APP na porta ${port}!`));
