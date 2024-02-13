import axios from 'axios'
import { message} from 'antd'

//insertar usuario

export const insertarUsuario=(data)=>{

    axios.post("http://localhost:4000/api/usuario",{

        nombre: data.nombre,
        email:data.email,
        password:data.password


    }).then( respuesta =>{
            console.log(respuesta.data)

            window.location.reload(false)

            window.location.replace('/');
        
            message.success({
                content: 'usuario agregado correctamente',
                className: 'message',
                style: {
                    marginTop: '5vh',
                },
            })

    }


    ).catch((error)=>{
        console.log(error)
    })


}

//login para generar el token

export const login = (data)=>{

    axios.post("http://localhost:4000/api/auth/login",{

        email: data.email,
        password: data.password
    }


    ).then(respuesta=>{

            if(respuesta.data){

                document.cookie =`token=${respuesta.data}; max-age=${1000*60*60*24*30}; path=/; samesite=strict`
                window.location.replace('/agenda');
            }

    }).catch((error)=>{

        console.log(error)
        message.success({
            content: 'El usuario y la contraseña no son correctos',
            className: 'message',
            style: {
                marginTop: '5vh',
            },
        })
    })



}

 //seleccionar todos los contactos

 export const getContactos=(contactos)=>{

    axios({
        url: "http://localhost:4000/api/contacto",
        })
        .then((respuesta) => {
            
            contactos(respuesta.data)

            
        })
        .catch((error) => {
            console.log(error)
        })
    
 }

 //seleccionar un contacto

 export const getContacto =(contacto, id)=>{

    axios({
        url: `http://localhost:4000/api/contacto/${id}`
    }).then((respuesta)=>{
        contacto(respuesta.data)
    }).catch((error)=>{
        console.log(error)
    })


 }
 // actualizar un contacto

 export const actualizarContacto=(data, id)=>{

    axios.put(`http://localhost:4000/api/contacto/${id}`,{
        nombre:data.nombre,
        apellido:data.apellido,
        email:data.email,
        telefono:data.telefono,
        direccion:data.direccion,


    }).then(respuesta =>{

        console.log(respuesta.data)

        window.location.reload(false)
        window.location.replace('/agenda');
        message.success({
            content: 'contacto actualizado correctamente',
            className: 'message',
            style: {
                marginTop: '5vh',
            },
        })
    }).catch((error)=>{
        console.log(error)
    })



 }

 //eliminar contacto

 export const eliminarContacto=(id)=>{

    axios({
        url: `http://localhost:4000/api/contacto/${id}`,
        method: 'DELETE'
    }).then(respuesta=>{
        message.success({
            content: 'contacto eliminado correctamente',
            className: 'message',
            style: {
                marginTop: '5vh',
            },
        })

        window.location.reload(true)
    }).catch((error)=>{
        console.log(error)
    })
 }
 //insertar contacto

 export const insertarContacto=(data)=>{

    axios.post(`http://localhost:4000/api/contacto`,{

        nombre:data.nombre,
        apellido:data.apellido,
        email:data.email,
        telefono:data.telefono,
        direccion:data.direccion,
        usuario_id:data.usuario_id
    }
    ).then(respuesta=>{
        console.log(respuesta.data)
        window.location.reload(false)

            window.location.replace('/agenda');
        
            message.success({
                content: 'contacto agregado correctamente',
                className: 'message',
                style: {
                    marginTop: '5vh',
                },
            })

    }).catch((error)=>{
        console.log(error)
    })
 }




