const express = require('express'); // requiero express
const app = express();  // creo la aplicacion
const port = 3000;  // indico el puerto

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.listen(port, () =>{
  console.log("My port: " + port);
});
