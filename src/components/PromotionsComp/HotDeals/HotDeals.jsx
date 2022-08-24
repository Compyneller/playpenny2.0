import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PromHeader from "../PromHeader/PromHeader";

const HotDeals = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Row className="g-3">
        <Col sm={12} lg={12}>
          <PromHeader />
        </Col>
      </Row>
    </Container>
  );
};

export default HotDeals;
