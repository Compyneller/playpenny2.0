import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import image from "../../../assets/18973620 [Converted].png";
const Daily = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <img src={image} className="w-100" alt="" />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="shadow">
            <Card.Body>
              <h3>
                Play 13 cards Classic Rummy online 24x7 games with us & join the
                fun. Stay Connected with us for an incredible Junglee rummy
                experience
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Daily;
