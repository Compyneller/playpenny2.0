import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import MyAccountSide from "../MyAccountSide/MyAccountSide";

const MyAccountComp = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="g-3">
          <Col sm={12} lg={3}>
            <MyAccountSide />
          </Col>
          <Col sm={12} lg={9}>
            <Outlet />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MyAccountComp;
