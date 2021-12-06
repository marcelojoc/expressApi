const express = require('express'); // requiero express
const app = express();  // creo la aplicacion
const port = 3000;  // indico el puerto
const routerApi = require('./routes');// importo las rutas  desde  routes

  // const router = express.Router();
  // app.use('/api/v1', router);
  // router.use('/products', productsRouter);
  // router.use('/categories', categoriesRouter);
  // router.use('/users', usersRouter);

  app.use(express.json()); // le digo que las respuestas  seran en formato json es un middleware nativo
  routerApi(app); // Instancio las  rutas  separadas




app.listen(port, () =>{
  console.log("My port: " + port);
});
