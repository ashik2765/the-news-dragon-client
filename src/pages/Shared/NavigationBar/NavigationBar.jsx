import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import './navigationBar.css'



const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex justify-content-between">
                            <Link className='nav-item-1' to='/'>Home</Link>
                            <Link className='nav-item-2' to='/about'>About</Link>
                            <Link className='nav-item-3' to='/career'>Career</Link>
                            
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user && 
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                            }
                           
                           
                            {user ? <Button  variant="secondary">Logout</Button> :
                            <Link to="/login">
                                <Button variant="secondary">Login</Button>
                            </Link>}
                            

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;