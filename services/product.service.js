const faker = require('faker'); // requiero faker  para  poblar  una bas e de datos local

class ProductsService {
  constructor() {
    this.products = []; // delaro un array
    this.generate(); // genero el contenido de un arreglo fake
  }

  generate() {
    const limit = 100; // limito a 100  el largo del array
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    /**
     * recibo los datos name: price: & image
     * despues los  coloco en el array this.products
     * retorno un mensaje
     */
    //let newId = faker.datatype.uuid();
    //  this.products.push({
    //     id: newId,
    //     name: data.name,
    //     price: data.price,
    //     image: data.image,
    //   });

    //   return newId

    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    // devuelvo todo  el arreglo
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  findOne(id) {
    // busco por id  en el arreglo
    const looo = this.createElement(); // forzando un error
    return this.products.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete() {
    const index = this.products.findIndex((item) => item.id === id); // busco el id  enviado
    if (index === -1) {
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
