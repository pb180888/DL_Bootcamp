const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3000;
app.use(cors());
app.use(express.static('../front'));
let items = [];

app
  .get('/items', (req, res) => {
    res.send(items);
  })
  .get('/items/:id', (req, res) => {
    items.some((item) => {
      if (item.item === req.params.id) {
        res.send(item);
      } else {
        res.status(404).send('Not found');
        ß;
      }
    });
  })
  .post('/items', postItem);
app.listen(port, () => {
  console.log("I'm listening");
});
function postItem(req, res) {
  let newItem = req.body;
  items.push(newItem);
  res.send(newItem);
}
