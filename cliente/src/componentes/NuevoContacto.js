import { Header } from './Header'
import React from 'react'
import { Footer } from './Footer'
import{Col,Row,Form,Button} from 'react-bootstrap'
import { insertarContacto } from '../routes/services'
import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { message } from 'antd'


export const NuevoContacto = () => {
    const [validated, setValidated]=useState(false)
    const [data,setData]=useState({
      nombre:"",
      apellido:"",
      email:"",
      telefono:"",
      direccion:"",
      usuario_id: jwtDecode(document.cookie).id
    })

   const handleChange=(event)=>{

    setData({
      ...data,
      [event.target.name]: event.target.value
    })


   }
   console.log(data)

   const handleSubmit =(event)=>{
      const form= event.currentTarget;
      if(form.checkValidity()===false){
        event.preventDefault();
      event.stopPropagation();
      message.warning({
        content: 'Debe rellenar todos los campos',
        className: 'message',
        style: {
            marginTop: '5vh',
        },
    })

      }else{
        setValidated(true)
        insertarContacto(data)


      }
   }

  return (
    <div>
        <Header/>
            <Row className='justify-content-center'>
                <Col md="auto">
                    <h1 className='tituloAgenda'>Nuevo Contacto</h1>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col md={10}>
        <Form noValidate validated={validated} className='formContacto' onSubmit={handleSubmit} >  
        <Row className="justify-content-md-center" >
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='nombre'>Nombre</Form.Label>
          <Form.Control required type="text" name ="nombre" id="nombre" placeholder="Nombre" onChange={handleChange} />
        </Form.Group> 
      </Row>
    
      <Row className="justify-content-md-center" >
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='apellido'>Apellido</Form.Label>
          <Form.Control required type="text" name ="apellido" id="apellido" placeholder="Apellido" onChange={handleChange} />
        </Form.Group> 
      </Row>
      
      <Row className="justify-content-md-center" >
        <Form.Group as={Col} md="4" >
          <Form.Label className='textoLogin' htmlFor='email'>Email</Form.Label>
          <Form.Control required type="email" name ="email" id="email" placeholder="Email" onChange={handleChange} />
        </Form.Group> 
      </Row>
   
      <Row className="justify-content-md-center" >
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='telefono'>Teléfono</Form.Label>
          <Form.Control required type="text" name ="telefono" id="telefono" placeholder="Telefono" onChange={handleChange} />
        </Form.Group> 
      </Row>
    
      <Row className="justify-content-md-center" >
        <Form.Group as={Col} md="4" >
          <Form.Label className='textoLogin' htmlFor='direccion'>Dirección</Form.Label>
          <Form.Control required type="text" name="direccion" id="direccion" placeholder="Direccion" onChange={handleChange} /> 
        </Form.Group>
      </Row>
     
      <Row className="justify-content-md-center">
        <Col md="4">
        <Button style={{marginTop:'10px'}} type="submit">Actualizar</Button>
        </Col>
      </Row>
      </Form>
                </Col>
            </Row>

        <Footer/>
    </div>
  )
}
