import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
const AddCash = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="w-100 text-dark" style={{ zIndex: "1000" }}>
      <Card.Header as="h3">Deposit</Card.Header>
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
            <span style={{ fontSize: "12px" }}>
              <em>Min Rs. 100 to Max Rs. 50000</em>
            </span>
          </div>
          <br />
          <br />
          <Card
            className="w-100"
            style={{ background: "#FFFAE9", border: "1px dashed red" }}
          >
            <Card.Body>
              <Row className="g-2 d-flex align-items-center justify-content-center">
                <div className="col-auto ">
                  <h5>Bonus Code :</h5>
                </div>
                <div className="col-auto">
                  <InputGroup>
                    <Form.Control
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="col-auto">
                  <Button variant="warning">APPLY </Button>
                </div>
              </Row>
            </Card.Body>
          </Card>
          <Button
            variant="info text-light mx-auto d-flex mt-4"
            onClick={handleShow}
          >
            <h3 className="m-auto">BUY CHIPS</h3>
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

export default AddCash;
