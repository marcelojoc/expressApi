const express = require('express');

const ProductsService = require('./../services/product.service'); // importo el servicio de productos, seria  colmo un controlador

const router = express.Router();
const service = new ProductsService();  //instancio esta clase

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

// router.post('/', (req, res) => {  // esta e s mi version
//   const body = req.body;

//   const products = service.create(body);
//   res.status(201).json({
//     message: 'created',
//     data: products
//   });
// });


router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;