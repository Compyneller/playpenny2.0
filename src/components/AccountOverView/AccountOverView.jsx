import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const AccountOverView = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="w-100 text-dark" style={{ zIndex: "1000" }}>
      <Card.Header as="h3">MY ACCOUNT</Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Col sm={12} lg={12}>
            <Card style={{ height: " 100%" }}>
              <Card.Header as="h5">Cash Account</Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-6">Account Balance</div>
                  <div className="col-6">
                    25.00{" "}
                    <Button variant="danger" onClick={handleShow}>
                      Add
                    </Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">Withdrawal Balance</div>
                  <div className="col-6">25.00</div>
                </div>
                <div className="row">
                  <div className="col-6">Pending Redeem</div>
                  <div className="col-6">0.00</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={12}>
            <Card style={{ height: " 100%" }}>
              <Card.Header as="h5">Bonus</Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-6">Instant Deposit Bonus</div>
                  <div className="col-6">0.00</div>
                </div>
                <div className="row">
                  <div className="col-6">Cash Bonus</div>
                  <div className="col-6">0.00</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={12}>
            <Card style={{ height: " 100%" }}>
              <Card.Header as="h5">Loyalty Points</Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-6">Pending Loyalty Points</div>
                  <div className="col-6">0.00</div>
                </div>
                <div className="row">
                  <div className="col-6">Released Loyalty Points</div>
                  <div className="col-6">0.00</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={12}>
            <Card style={{ height: " 100%" }}>
              <Card.Header as="h5">Practice Account</Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-6">Practice Chips</div>
                  <div className="col-6">9960</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={12}>
            <Card style={{ height: " 100%" }}>
              <Card.Header as="h5">Deposit Limit</Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-6">Daily Limit</div>
                  <div className="col-6">50000</div>
                </div>
                <div className="row">
                  <div className="col-6">Monthly Limit</div>
                  <div className="col-6">1000000</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Header closeButton></Modal.Header> */}
          <Modal.Body>
            <h5 className="text-center">This Service is coming soon.</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default AccountOverView;
