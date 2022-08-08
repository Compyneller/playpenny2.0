import React, { useState } from "react";
import { Button, Card, Form, InputGroup, Modal } from "react-bootstrap";

const WithdrawCash = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="w-100 text-dark" style={{ zIndex: "1000" }}>
      <Card.Header as="h3">WITHDRAW CASH</Card.Header>
      <Card.Body>
        <form action="">
          <div className="row g-2">
            <div className="col-2">
              <Card>
                <Card.Body>
                  <img
                    className="w-100"
                    src="https://img.icons8.com/material-two-tone/344/rupee.png"
                    alt=""
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-10">
              <InputGroup className="mb-3" style={{ height: "100%" }}>
                <Form.Control
                  placeholder="1000"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>
          <br />
          <Button variant="info" className="m-auto d-flex" onClick={handleShow}>
            <h5 className="m-auto">REDEEM CHIPS</h5>
          </Button>
        </form>
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

export default WithdrawCash;
