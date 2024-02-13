import React from 'react'
import '../App.css'
import {Container, Col, Row, Form, Button,Card} from 'react-bootstrap'
import { useState } from 'react'
import{Link} from 'react-router-dom'
import{message} from 'antd'
import { insertarUsuario } from '../routes/services'

export const Registrar = () => {

  const [validated, setValidated]=useState(false);

  const [data,setData]= useState({

      nombre: "",
      email:"",
      password:""
  })

  const handleChange=(event)=>{

    setData({
      ...data,
        [event.target.name]:event.target.value,
    })
  }

  console.log(data)

  const handleSubmit=(event)=>{

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
      insertarUsuario(data)
     
    }
  }
  return (
    <div className='caja'>

        <Container >
            <Row className='justify-content-md-center'>
              <Col md="auto">
                <h1 className='loginH1'>Registrate</h1>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
            <Col md={6}>
            <Card className='cardLogin'>
            <Form noValidate validated={validated} className='formLogin' onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='nombre'>Nombre</Form.Label>
          <Form.Control required type="text" name ="nombre" id="nombre" placeholder="Nombre" onChange={handleChange} />
        </Form.Group> 
      </Row>
      <Row className="justify-content-md-center">
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='email'>Email</Form.Label>
          <Form.Control required type="email" name ="email" id="email" placeholder="Email" onChange={handleChange} />
        </Form.Group> 
      </Row>
      <Row className="justify-content-md-center">
        <Form.Group as={Col} md="4" >
          <Form.Label className='textoLogin' htmlFor='password'>Password</Form.Label>
          <Form.Control required type="password" name="password" id="password" placeholder="Password" onChange={handleChange} /> 
        </Form.Group>
      </Row>

      <Row className="justify-content-md-center">
        <Col md="4">
        <Button style={{marginTop:'10px'}} type="submit">Enviar</Button>
        </Col>
      </Row>
      </Form>
      </Card>
            </Col>

            </Row>
        <Row className='justify-content-md-center'>
          <Col md="4">
              <p className="pregistro"><Link to="/" className='linkp'>Inicia sesion</Link> si ya estas registrado</p>
          </Col>
        </Row>


        </Container>


    </div>
  )
}
