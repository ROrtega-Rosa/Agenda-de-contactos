const TABLA = 'contacto'

module.exports= function(dbInyectada){

    const db= dbInyectada;

    if(!db){
        db = resizeByrequire ('../../DB/mysql');
    }

    function todos(){

        return db.todos(TABLA)
    }
    function uno(id){

        return db.uno(TABLA,id)
    }

    function agregar (body){
        return db.agregar(TABLA,body)
    }

    function eliminar (id){
        return db.eliminar(TABLA, id);
    }

    function actualizar (id, body){
        return db.actualizar(TABLA, id, body);
    }

    return{
        todos,
        uno,
        agregar,
        eliminar,
        actualizar
    }

}