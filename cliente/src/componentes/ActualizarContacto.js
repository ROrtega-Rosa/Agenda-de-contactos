import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getContacto } from '../routes/services'
import { actualizarContacto } from '../routes/services'
import { message } from 'antd'

export const ActualizarContacto = () => {
    const [validated,setValidated]=useState(false)
    const [data,setData]=useState([])

    const[contacto, setContacto]=useState([]);
    const params =useParams()

    console.log(params.id)

    useEffect(()=>{

            getContacto(setContacto, params.id)
        
    },[params.id])

    console.log(contacto)


    const handleChange=(event)=>{

        setData({
            ...data,
            [event.target.name]: event.target.value,
            })
    }
    console.log(data)

    const handleSubmit=(event)=>{
        const form=event.currentTarget;
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
            actualizarContacto(data, params.id)
        }

    }
  return (
    <div >
        <Header/>
            <Row className='justify-content-center'>
                <Col md="auto">
                    <h1 className='tituloAgenda'>Actualizar Contacto</h1>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={10}>
                <Form noValidate validated={validated} className='formContacto' onSubmit={handleSubmit}>
           
          {  
            contacto.map((c,index)=>(  
        <Row className="justify-content-md-center" >
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='nombre'>Nombre</Form.Label>
          <Form.Control required type="text" name ="nombre" id="nombre" placeholder="Nombre" defaultValue={c.nombre} onChange={handleChange} />
        </Form.Group> 
      </Row>
      )) 
          }
          {
            contacto.map((c,index)=>(
      <Row className="justify-content-md-center" key={index}>
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='apellido'>Apellido</Form.Label>
          <Form.Control required type="text" name ="apellido" id="apellido" placeholder="Apellido" defaultValue={c.apellido} onChange={handleChange} />
        </Form.Group> 
      </Row>
      ))
          }
        {
            contacto.map((c,index)=>(
      <Row className="justify-content-md-center" key={index}>
        <Form.Group as={Col} md="4" >
          <Form.Label className='textoLogin' htmlFor='email'>Email</Form.Label>
          <Form.Control required type="email" name ="email" id="email" placeholder="Email" defaultValue={c.email} onChange={handleChange} />
        </Form.Group> 
      </Row>
      ))
        }
        { 
            contacto.map((c,index)=>(
      <Row className="justify-content-md-center" key={index}>
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='telefono'>Teléfono</Form.Label>
          <Form.Control required type="text" name ="telefono" id="telefono" placeholder="Telefono" defaultValue={c.telefono} onChange={handleChange} />
        </Form.Group> 
      </Row>
      ))
        }
        {
            contacto.map((c,index)=>(
      <Row className="justify-content-md-center" key={index}>
        <Form.Group as={Col} md="4" >
          <Form.Label className='textoLogin' htmlFor='direccion'>Dirección</Form.Label>
          <Form.Control required type="text" name="direccion" id="direccion" placeholder="Direccion" defaultValue={c.direccion} onChange={handleChange} /> 
        </Form.Group>
      </Row>
      ))
        }
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
