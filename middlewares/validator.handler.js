const boom = require('@hapi/boom'); // requiero boom para manejar  los  errores status  code

function validatorHandler(schema, property) {
  // este  es un tipo de middleware normal recibo un esquema  y un objeto de propiedades
  return (req, res, next) => {
    const data = req[property]; // coloco en data los valores que vienen  en req dinamico  con property ,  si es body, params o query
    const { error } = schema.validate(data, { abortEarly: false }); // aqui valido  los  datos  enviadios ,  error  es  destructurado
    // { abortEarly: false }  es para que envie todos los errores  de una vez

    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
