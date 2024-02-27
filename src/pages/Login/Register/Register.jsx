import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [Error,setError]= useState();
    const [success,setSuccess] = useState()

    const handleRegister =(event)=>{
        console.log(event)
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,password)
        createUser(email,password)
        .then(result =>{
            const createdUser =result.user;
            console.log(createdUser)
            setSuccess('Registration successfully')
        })
        .catch(error =>{
            setError(error.message)
        })


    }
    return (
        <Container className='w-25 mx-auto mt-5'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
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
                <Form.Text className="text-muted">
                    {success}
                </Form.Text>
                <br />
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted">
                   Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;