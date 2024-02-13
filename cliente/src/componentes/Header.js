import React from 'react'
import{Navbar, Container, Nav} from 'react-bootstrap'
import{Link, useNavigate} from 'react-router-dom'
import { FiHome } from "react-icons/fi";
import{FiXSquare} from "react-icons/fi";
import{message} from 'antd'
export const Header = () => {

    const navigate = useNavigate()

    const cerrarSesion=()=>{

        document.cookie = "token=;  expires=Thu, 01 Jan 1970 00:00:00 UTC";
        navigate('/');
       message.success({
        content: 'Su sesión ha sido cerrada correctamente',
        className: 'message',
        style: {
            marginTop: '5vh',
        },
    })


    }
  return (
    <Navbar collapseOnSelect expand="lg" className='nav'>
    <Container>
     <Navbar.Brand as={Link} to={'/agenda'} className="textoHeader"><FiHome className='icon'></FiHome>Agenda</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
     
        <Nav>
          <Nav.Link  as={Link} to={'/'} className="textoHeader" onClick={cerrarSesion} ><FiXSquare className='icon' ></FiXSquare>Cerrar Sesión</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
