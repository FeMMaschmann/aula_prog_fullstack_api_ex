const db = require("./db_connection");

async function list(req, res) {
  const rows = await db.query(`SELECT * FROM products`);

  res.send(rows);
}

async function searchById(req, res) {
  const id = req.params.id;
  if (id > 0) {
    const row = await db.query(`SELECT * FROM products WHERE id = ?`, [id]);

    res.send(row);
  }
  res.status(404).json({ msg: "Produto nao encontrado" });
}

async function insert(req, res) {
  const row = await db.query(
    `INSERT INTO products (name, price) values (?, ?);`,
    [req.body.name, req.body.price]
  );

  res.send("OK");
}

async function update(req, res) {
  const id = req.params.id;
  if (id > 0) {
    const row = await db.query(
      `UPDATE products SET name = ?, price = ? WHERE id = ?;`,
      [req.body.name, req.body.price, id]
    );

    res.send("OK");
  }
  res.status(404).json({ msg: "Produto nao encontrado" });
}

async function del(req, res) {
  const id = req.params.id;
  if (id > 0) {
    const row = await db.query(`DELETE FROM products WHERE id = ?;`, [id]);
    res.send("OK");
  }
  res.status(404).json({ msg: "Produto nao encontrado" });
}

module.exports = { list, searchById, insert, update, del };
