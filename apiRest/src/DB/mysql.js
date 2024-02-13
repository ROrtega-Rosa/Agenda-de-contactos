const mysql = require('mysql');
const config = require('../config');

const dbconfig ={
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}
let conexion;
function conMysql (){

    conexion = mysql.createConnection(dbconfig);
    conexion.connect((err)=>{
        if(err){
            console.log('db err'.err);
            setTimeout(conMysql, 200);
        }else{
            console.log("base de datos conectada...");
        }
    });
    conexion.on('error', err=>{
        console.log('db err'.err);
        if(err.code ==='PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    });

}

conMysql();

// funciones sql
// select
function todos(tabla){
    return new Promise( (resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`,(error,result)=>{
            if(error) return reject(error);
            resolve(result);
        });
    });
    
}
//select 1

function uno(tabla,id){
    return new Promise((resolve,reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`,(error,result)=>{
            if(error) return reject(error);
            resolve(result);
        });

    })
}
// insert

function agregar(tabla, data){
    return new Promise((resolve,reject)=>{
        conexion.query(`INSERT INTO ${tabla} SET ? `,data,(error,result)=>{
            if(error) return reject(error);
            resolve(result);
        });
    })
}

//update

function actualizar(tabla,id,data){
    return new Promise((resolve,reject)=>{
        conexion.query(`UPDATE ${tabla} SET ? WHERE id=?`,[data,id],(error,result)=>{
            if(error) return reject(error);
            resolve (result);
        })
    })
}

//delete
function eliminar(tabla,id){
    return new Promise( (resolve, reject)=>{
        conexion.query(`DELETE FROM ${tabla} WHERE id=${id}`,(error,result)=>{
            if(error) return reject(error);
            resolve(result);
        });
    });

}
//login
function query(tabla, consulta){
    return new Promise( (resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE ?`,consulta,(error,result)=>{
            if(error) return reject(error);
            resolve(result[0]);
        });
    });

}

module.exports={
    todos,
    uno,
    agregar,
    actualizar,
    eliminar,
    query
}