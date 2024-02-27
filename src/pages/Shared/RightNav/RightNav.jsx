import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mb-2'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle />Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub />
                Login With Github
            </Button>
            <div>
                <h4 className='mt-2 mb-2'>Find Us</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-1'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>

            </div>
            <Qzone></Qzone>
            <div>
                <img className='w-100 rounded' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;