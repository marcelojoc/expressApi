const express = require('express'); // requiero express
const app = express();  // creo la aplicacion
const port = 3000;  // indico el puerto

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');


  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);







app.listen(port, () =>{
  console.log("My port: " + port);
});
