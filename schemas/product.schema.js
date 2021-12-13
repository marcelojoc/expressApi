const Joi = require('joi');


const id = Joi.string().uuid();  // UN VALOR  DE TIPO  UUID
const name = Joi.string().alphanum().min(3).max(15); // alfanumerico de 15 caracteres
const price = Joi.number().integer().min(10);  // numerico  entero  de minimamente 10 caractreres
const image = Joi.string().uri();

const createProductSchema = Joi.object({  // genero  un esquema para crear un producto
  name: name.required(),   // nombre y precio requerido
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({  // genero  un esquema para actualizar un producto
  name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
