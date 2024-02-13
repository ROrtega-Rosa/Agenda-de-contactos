const express = require ('express');
const morgan = require ('morgan');
const config = require('./config');
const cors = require('cors');
const error = require ('./red/errors');
const contacto=require('./modulos/contacto/rutas')
const usuario = require('./modulos/usuario/rutas')
const auth = require ('./modulos/auth/rutas')
//var bodyParser = require('body-parser');

const app = express();
//Middleware
app.use(cors());
app.use(morgan('dev'));

// fixing "413 Request Entity Too Large" errors
app.use(express.json({limit: "50mb", extended: true}))


//configuracion
app.set('port', config.app.port);


//rutas

app.use('/api/contacto',contacto);
app.use('/api/usuario',usuario);
app.use('/api/auth',auth);

//error
app.use(error);



module.exports = app;