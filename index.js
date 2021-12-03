const express = require('express'); // requiero express
const app = express();  // creo la aplicacion
const port = 3000;  // indico el puerto

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/nueva", (req, res) =>{
  res.send("Hola esta es una nueva ruta");
});

app.get("/products", (req, res) =>{
  res.json({name: 'producto1',
            precio : '343434'});
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});




app.listen(port, () =>{
  console.log("My port: " + port);
});
