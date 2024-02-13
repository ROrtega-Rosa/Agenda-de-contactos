const jwt = require('jsonwebtoken');
const config = require ('../config');
const secret= config.jwt.secret;


// funcion que genera el token
function asignarToken(data){
    
    return jwt.sign(data,secret); //token
    
}

module.exports= {
    asignarToken
}