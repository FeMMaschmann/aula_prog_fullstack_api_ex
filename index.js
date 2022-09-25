const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/products");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/products", productsRouter);

app.listen(port, () => console.log(`APP na porta ${port}!`));
