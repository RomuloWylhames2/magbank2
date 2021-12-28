import React from "react";
import { Row, Col, Card, Button, Image } from "react-bootstrap";
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';
import './Hero.scss';

const Hero = () => (
    <Card.Body className='text-center text-light hero'>
      <Row className="my-lg-5">
        <Col lg className="text-lg-end my-lg-5">
          <Image className='d-lg-none' src={logo} />
          <Image className='d-none d-lg-inline-block' src={logoDesktop} />
        </Col>
        <Col lg className="text-lg-start my-lg-5">
          <Card.Title>Pague suas contas pelo nosso APP</Card.Title>
          <Button variant="outline-light">Abra sua conta</Button>
        </Col>
      </Row>     
    </Card.Body>
);

export default Hero;
