//desde aqui llamamos a las respuestas exitosas o las respuestas de error

exports.success = function (req, res, mensaje, status){
    const statusCode = status || 200;
    const mensajeOk = mensaje || '';
    res.status(statusCode).send(  mensajeOk/*{ 
        error: false,
        status: statusCode,
        body: mensajeOk
        
    }*/);
}
/*
exports.error = function (req, res, mensaje, status){
    const statusCode = status || 500;
    const mensajeError = mensaje || 'error interno';
    res.status(status).send({

        error: true,
        status: statusCode,
        body: mensajeError
    });
}*/