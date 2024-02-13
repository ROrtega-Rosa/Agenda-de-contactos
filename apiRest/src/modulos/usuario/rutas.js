const express= require('express');
const router = express.Router();

const respuesta = require('../../red/respuestas');
const controlador= require('./index');

//rutas

router.get('/',todos)
router.get('/:id',uno)
router.delete('/:id', eliminar);
router.post('/',agregar)
router.put('/:id',actualizar)

//sql


async function todos(req,res,next){
    try{
        const items = await controlador.todos();
         respuesta.success(req,res,items, 200);
     }catch(err){
   
       next(err);
     }
}

async function uno (req,res, next){

  try{
    
    const items = await controlador.uno(req.params.id);
    respuesta.success(req,res,items,200)

  }catch(err){
    next(err)
  }
}

async function eliminar(req, res, next){
  try{
  const items = await controlador.eliminar(req.params.id);
    respuesta.success(req,res,'Se ha eliminado un registro', 200);
  }catch(err){

    respuesta.error(err);
    next(err);
  }
   
}

async function agregar (req,res,next){

  try{

    const items = await controlador.agregar(req.body);
    respuesta.success(req, res, "se ha agregado un registro", 200);
  }catch(err){
    respuesta.error(err)
    next(err)
  }
}



async function actualizar(req, res, next){
  try{
  const items = await controlador.actualizar(req.params.id , req.body);
    respuesta.success(req,res,"Se ha actualizado un registro", 200);
  }catch(err){

    respuesta.error(err);
    next(err);
  }
   
}


module.exports = router;