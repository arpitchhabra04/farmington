import React, { Component } from 'react';
import { Row, Col, Icon, IconFont } from 'antd';
import './contactUs.css';
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="contact_1">
          {' '}
          <p className="contact_head">Conatct Us</p>
          <p className="contact_subhead">Call or Message Us for any Help!</p>
        </div>

        <Row>
          <Col md={4} offset={4}>
            <Icon type="icon-facebook" /> <Icon type="phone" />
          </Col>
          <Col md={4}>
            <p>500 Terry Francois St.</p>
            <p>San Francisco, CA 94158</p>
          </Col>
          <Col md={4}>
            <p>info@mysite.com</p>
            <p>123-456-7890</p>
          </Col>
          <Col md={4}>
            <p>© 2019 by Farmington.</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
