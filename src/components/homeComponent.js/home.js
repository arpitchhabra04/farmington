import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './home.css';
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Col md={20}>
            <div className="home_image"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
