import React from 'react'
import '../App.css'
import {Container, Col, Row, Form, Button,Card} from 'react-bootstrap'
import{Link} from 'react-router-dom'
import { login } from '../routes/services'
import { useState } from 'react'
import { message } from 'antd'

export const Login = () => {
  const [validated, setValidated]=useState(false)

  const [data, setData] =useState({
    email:"",
    password:"",
  })

  const handleChange=(event)=>{

    setData({
      ...data,
      [event.target.name]: event.target.value
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
      login(data)
    }

  }


  return (
    <div className='caja'>
        <Container >
            <Row className='justify-content-md-center'>
              <Col md="auto">
                <h1 className='loginH1'>Iniciar Sesión</h1>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
            <Col md={6}>
            <Card className='cardLogin'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='formLogin'>
      <Row className="justify-content-md-center">
        <Form.Group as={Col} md="4">
          <Form.Label className='textoLogin' htmlFor='email'>Usuario</Form.Label>
          <Form.Control required type="email" name ="email" id="email" placeholder="Email"  onChange={handleChange}/>
        </Form.Group> 
      </Row>
      <Row className="justify-content-md-center">
        <Form.Group as={Col} md="4" >
          <Form.Label className='textoLogin' htmlFor='password'>Password</Form.Label>
          <Form.Control required type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/> 
        </Form.Group>
      </Row>

      <Row className="justify-content-md-center">
        <Col md="4">
        <Button style={{marginTop:'10px'}} type="submit">Acceder</Button>
        </Col>
      </Row>
      </Form>
      </Card>
            </Col>

            </Row>
        <Row className='justify-content-md-center'>
          <Col md="4">
              <p className="pregistro"><Link to="/registrar" className='linkp'>Registrate</Link> para crear tu propia agenda de contactos</p>
          </Col>
        </Row>


        </Container>
      
   </div>  
    
  )
}
