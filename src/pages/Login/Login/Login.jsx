import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const [Error, setError] = useState()

    const handleLogin =(event)=>{
        event.preventDefault();
        console.log('login Successfull')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <Container>
            <Form onSubmit={handleLogin} className='w-25 mx-auto mt-5'>
                <h2>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-muted">
                    {Error}
                </Form.Text>
                <br />
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted">
                 Don't have an Account?<Link to='/register'>Register</Link>
                </Form.Text>
                
            </Form>
        </Container>
    );
};

export default Login;