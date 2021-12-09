const express = require('express'); // requiero express
const app = express();  // creo la aplicacion
const port = 3000;  // indico el puerto
const routerApi = require('./routes');// importo las rutas  desde  routes
const {logErrors, errorHandler} = require("./middlewares/error.handlers");

  // const router = express.Router();
  // app.use('/api/v1', router);
  // router.use('/products', productsRouter);
  // router.use('/categories', categoriesRouter);
  // router.use('/users', usersRouter);

  app.use(express.json()); // le digo que las respuestas  seran en formato json es un middleware nativo
  routerApi(app); // Instancio las  rutas  separadas
  //los middlewares se delaran despues  del routing
  app.use(logErrors);  // declaro los middlewares para  usar  globalmente
  app.use(errorHandler);


app.listen(port, () =>{
  console.log("My port: " + port);
});
