import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PromHeader from "../PromHeader/PromHeader";

const HotDeals = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <h1>Hot Deals</h1>
          <Row className="g-3">
            <div className="col-12 col-lg-6">
              <Card>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <h5 className="m-auto">Weekly LeaderBoard</h5>
                  <p className="m-auto">Check the exciting prizes to be won</p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-lg-6">
              <Card>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <h5 className="m-auto">DR Smash</h5>
                  <p className="m-auto">10% Bonus upto Rs. 500</p>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Col>
        <Col sm={12} lg={6}>
          <PromHeader />
        </Col>
      </Row>
    </Container>
  );
};

export default HotDeals;
