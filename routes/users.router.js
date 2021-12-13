const express = require('express');

const {fixmiddleware, othermiddleware} = require('./../middlewares/fix.handler');

const router = express.Router();

router.get('/', (req, res) => {
  const { name, password } = req.body;
  console.log(req.body);

    res.status(200).json({
      access: name,
      pass: password
    });

});




router.get('/filter', [fixmiddleware, othermiddleware]);









router.get('/:id', (req, res) => {
  const { limit, offset } = req.query;
  console.log(req.query);
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});









module.exports = router;
