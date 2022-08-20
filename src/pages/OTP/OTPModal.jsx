import React, { useState } from "react";
import { Alert, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const OTPModal = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        mobile_no: localStorage.getItem("userMobileNumber"),
        country_code: "91",
        otp: otp,
      };
      const { data } = await axios.post(
        "https://www.inrdweb.com:4100/playpenny/verifyCode",
        body
      );
      if (data.success) {
        navigate("/signup");
      }
    } catch (error) {
      setErrorMsg("Wrong OTP");
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Verify OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter OTP</h4>
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Enter OTP"
              aria-label="Username"
              className="text-dark"
              aria-describedby="basic-addon1"
              type="tel"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OTPModal;
