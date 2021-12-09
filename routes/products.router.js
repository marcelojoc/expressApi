const express = require('express');
const faker = require('faker'); // generador  de datos falsos
const router = express.Router();

router.get('/', (req, res) => {
  // una ruta de products
  const products = [];
  const { size } = req.query;
  const limit = size || 10; // si no envio size  (tamaño) por defecto es 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  // products/filter
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({    // manejo de Status code
      message: 'not found'
    });
  } else {
    res.status(200).json({
      id,
      name: 'Product 2',
      price: 2000
    });
  }
});

router.post('/', (req, res) => {
  // products  pero como POST  PARA CREAR nuevos registros  status code 201
  const body = req.body;
  res.status(201).json({  
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  // products  pero como Patch para modificar datos pero pocos campos si no usaria put
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  // eliminar  datos, no recomendado
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
