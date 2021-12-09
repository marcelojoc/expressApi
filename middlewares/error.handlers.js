function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// este middleware  es  global, para que cuando la aplicacion intercepte  un error  este  lo formatee de una manera
// de esta  forma  evitamos que se deba  formatear uno por uno los errores  y que se deba  manejar  uno a uno por cada ruta
module.exports = { logErrors, errorHandler }
