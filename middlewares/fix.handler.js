

const  {createHmac} = require('crypto')

function fixmiddleware( req, res,  next){

    const {name, password} = req.body;
    console.log('fix' , req.body);



const secret = '4f6a6d832be79';
const hash = createHmac('sha256' , secret)
               .update(password)
               .digest('text');
console.log(hash);

    if(name != ""){

      res.status(200).send('Hola ' + name);
    }else{

      next();
    }
}

function othermiddleware(req, res ){

    console.log('oter');

    res.status(404).send('no hay usuario enviado');

}




module.exports = {fixmiddleware, othermiddleware}
