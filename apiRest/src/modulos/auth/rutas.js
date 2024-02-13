const express = require ('express');
const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador = require('./index');


//rutas

router.post('/login', login)



//select id login
async function login(req, res,next){
    try{
    const token = await controlador.login(req.body.email, req.body.password);
   
      respuesta.success(req,res,token, 200);
    }catch(err){
  
      next(err);
    }
     
  }

 

module.exports = router;