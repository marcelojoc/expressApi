const express = require('express');

const ProductsService = require('./../services/product.service'); // importo el servicio de productos, seria  colmo un controlador

const router = express.Router();
const service = new ProductsService();  //instancio esta clase

router.get('/', async(req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', async(req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async(req, res, next) => {
  // const { id } = req.params;
  // const product = await service.findOne(id);
  // res.json(product);

  try {  // capturo el error  con el try catch
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
    
  } catch (error) {
    next(error);
  }

});

// router.post('/', (req, res) => {  // esta e s mi version
//   const body = req.body;

//   const products = service.create(body);
//   res.status(201).json({
//     message: 'created',
//     data: products
//   });
// });


router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async(req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
