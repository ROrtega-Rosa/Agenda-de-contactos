import React, { useEffect, useState } from 'react'
import '../App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { useNavigate, Link } from 'react-router-dom'
import {jwtDecode} from "jwt-decode";
import { Container, Col, Row, Table,Form, Button } from 'react-bootstrap'
import { getContactos } from '../routes/services'
import{FiEdit2} from "react-icons/fi";
import { eliminarContacto } from '../routes/services'
import { Popconfirm } from 'antd';
import{FiTrash2} from "react-icons/fi";
import{FiFilePlus} from "react-icons/fi";

export const Agenda = () => {

  const navigate =useNavigate()
  const [nombreUsuario, setNombreUsuario]=useState()
  const [idUsuario,setIdUsuario]=useState()
  const [contactos, setContactos]=useState([])
  const [resultadoContactoId,setResultadoContactoId]=useState([]);
  const [encontrado, setEncontrado]=useState("")

  useEffect(()=>{
    if(document.cookie){

    setNombreUsuario(jwtDecode(document.cookie).nombre);
    setIdUsuario(jwtDecode(document.cookie).id)
    getContactos(setContactos)


    }else{
        navigate('/')
       
    }
},[]);


console.log(contactos)
console.log(idUsuario)



const busqueda = (event)=>{

  setEncontrado(event.target.value)
  
  
}

useEffect(()=>{

  if(!encontrado){

    setResultadoContactoId( contactos.filter(valor => valor.usuario_id===idUsuario));
  
  }else{
  
    setResultadoContactoId(contactos.filter(valor=>valor.nombre===encontrado.toLowerCase() && valor.usuario_id===idUsuario));
  }

},[encontrado, contactos, idUsuario])

console.log(resultadoContactoId)
  return (
    <div>
      <Header/>
      <Container>
      <Row className='justify-content-center'>
        <Col md='auto'>
        <h1 className='tituloAgenda'>Agenda de {nombreUsuario}</h1>
        </Col>

      </Row>
      <Row className="justify-content-md-center">
        <Col sm={5} className="my-1">
          <Form.Control  id="nombre" name="nombre" placeholder="Buscar por nombre" onChange={busqueda} required />
        </Col>
      </Row>
      <Row className='justify-content-center'>
          <Col md={12}>
          <Button className='btnNuevo' as={Link} to={'/nuevoContacto'}><FiFilePlus>Nuevo</FiFilePlus></Button>
          </Col>
      </Row>
       <Row className='justify-content-center'>
        <Col >
        
        <Table  striped bordered hover responsive  className='tabla'>
      <thead>
        <tr>
          <th style={{ color:'greenyellow'}}>Nombre</th>
          <th style={{ color:'greenyellow'}}>Apellido</th>
          <th style={{ color:'greenyellow'}}>Email</th>
          <th style={{ color:'greenyellow'}}>Teléfono</th>
          <th style={{ color:'greenyellow'}}>Dirección</th>
          <th style={{ color:'greenyellow'}}>Opciones</th>
        </tr>
      </thead>
      <tbody>
          {

            resultadoContactoId.map((c,index)=>(
              <tr key={index}>
                <td>{c.nombre}</td>
                <td>{c.apellido}</td>
                <td>{c.email}</td>
                <td>{c.telefono}</td>
                <td>{c.direccion}</td>
                <td>
                  <Button as={Link} to={"/actualizarContacto/"+c.id}><FiEdit2>Editar</FiEdit2></Button>
                  <Popconfirm title="¿Seguro que desea eliminar este contacto?" icon={<FiTrash2/>} onConfirm={e =>{eliminarContacto(c.id)}} okText="Eliminar" okType='danger' cancelText='cancelar'>
                    <Button><FiTrash2>Eliminar</FiTrash2></Button>
                  </Popconfirm>
                </td>
              
              </tr>
            ))
          }
        
      </tbody>
    </Table>
        
        </Col>

      </Row>
      
      </Container>
      
      <Footer/>
    </div>
    
  )
}
