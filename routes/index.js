const express = require('express');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerApi(app) {
    const router = express.Router(); // de esta manera hago un pat global para  router 
    app.use('/api/v1', router);  // en este caso es api/v1
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
  }
  
  module.exports = routerApi;