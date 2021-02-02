const express = require('express');
const products = require('./data/products');

const app = express();

const PORT = 5000;
//Root url
app.get('/', (req, res) => {
  res.send('API is successfully running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, console.log(`Server running on ${PORT}`));
