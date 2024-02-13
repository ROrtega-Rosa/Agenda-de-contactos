const autenticacion = require('../../autenticacion/index');


const TABLA = 'usuario';

module.exports = function (dbInyectada){

    const db= dbInyectada;

    if(!db){
        db = resizeByrequire ('../../DB/mysql');
    }

    //devuelve el token

   async function login (email,password){

    const data= await db.query(TABLA,{email:email})

    if(password == data.password && email == data.email){ 
        
      
      
        return autenticacion.asignarToken({...data});

     }else{
        throw new Error ('Informacion invalida, acceso denegado');
     }


    }

    return{
        login
    }

}

