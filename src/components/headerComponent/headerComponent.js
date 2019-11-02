import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import './headerComponent.css';
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <Row>
          <Col md={2} offset={2} className="trade_name">
            <img src=""></img> Farmington
          </Col>
        </Row>
        <Row className="sub_header">
          <Col md={2} offset={2}>
            <a>Home</a>
          </Col>
          <Col md={2}>
            <a>Services</a>
          </Col>
          <Col md={2}>
            <a>About</a>
          </Col>
          <Col md={3}>
            <a>Testimonials</a>
          </Col>
          <Col md={2}>
            <a>Gallery</a>
          </Col>
          <Col md={2}>
            <a>Conatct</a>
          </Col>
          <Col md={2} offset={4}>
            <a>LogIn</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
