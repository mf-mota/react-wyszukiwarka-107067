import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h4>Wyszukiwarka Audi</h4>
          </Col>
          <Col>
            <h8>Nr Albumu 107067, Grupa 1 z Łodzi</h8>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
