import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment'
import { Button, Col, Container, Row} from 'react-bootstrap';
import Marquee from "react-fast-marquee";




const Header = () => {
  
  return (
    <Container className='mt-4'>
  <Row>
    <Col xs={12} className="text-center">
    <img src={logo} alt="" className="img-fluid" />
      <p><small>Journalism Without Fear or Favour</small></p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </Col>
  </Row>
  <Row>
    <Col xs={12} className='d-flex justify-content-between'>
      <Button variant="danger">Latest</Button>
      <Marquee className='text-danger text-bold bg-red' speed={100}>
      Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine.
      </Marquee>
    </Col>
  </Row>
</Container>
  );
};

export default Header;