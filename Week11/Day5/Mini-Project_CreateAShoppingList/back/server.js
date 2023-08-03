const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;
const items = [];
app.use(express.json());
app.use(cors());
app.use(express.static("../front"));
app.post("/items", postItem);
app.get("/items", getItems);
app.listen(port, () => console.log(`I'm listeting on ${port}`));
function getItems(req, res) {
  res.send(items);
}
function postItem(req, res) {
  const { body } = req;
  const { item, quantity } = body;
  if (quantity < 1) return;
  const productInItems = getProductFromItems(item);
  if (productInItems == null) {
    const objToSave = { item, quantity };
    items.push(objToSave);
    return res.send(objToSave);
  }
  productInItems.quantity += quantity;
  res.send(productInItems);
}

function getProductFromItems(item) {
  return items.find((i) => i.item === item);
}
