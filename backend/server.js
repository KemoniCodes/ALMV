const express = require('express');
const { filter } = require('./data/products');
const products = require('./data/products')

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
})
app.get('/api/products', (req, res) => {
    const product = products.find
    res.json(products)
})
app.get('/api/products/:name/:id', (req, res ) => {

    const product = products.find((p) => p.id === req.params.id, req.params.name)
    req.params.name = product.category.name;
    req.params.id = product.id
    res.json(product)
    console.log(product)
})

app.listen(5000, console.log('Server running on port 5000'))
