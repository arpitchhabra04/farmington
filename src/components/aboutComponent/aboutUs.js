import React, { Component } from 'react';
import { Col, Row, Button } from 'antd';
import './aboutUs.css';

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Col offset={1} md={11}>
            <h1>About Farmington</h1>
            <h2>With Us the Grass is Greener</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p>
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </Col>
          <Col md={11}>
            <div className="image_farmer">
              <img src="images/farm.jfif" alt="farmer image" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col offset={1} md={11}>
            <div>
              <img src="images/farm2.jfif" alt="farmer image"></img>
            </div>
          </Col>
          <Col md={11} className="sub_about">
            <h1>Get Free Help From Experts</h1>

            <Button className="about_button">LogIn</Button>

            <h2> Or Call Us: 123-456-7890 </h2>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutUs;
