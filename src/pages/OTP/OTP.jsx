import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginBg from "../Login/LoginBg";
import OTPModal from "./OTPModal";
const OTP = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [disable, setDisable] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = {
        mobile_no: mobile,
        country_code: "91",
      };
      const { data } = await axios.post(
        "https://www.inrdweb.com:4100/playpenny/sendCode",
        body
      );
      setDisable(true);
      setModalShow(true);
      console.log(data);
    } catch (error) {
      setErrorMsg(error);
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-bg">
        <LoginBg />
      </div>
      <Container className="d-flex">
        <Card className="m-auto login-card">
          <Link to="/">
            <img
              className="crossImage"
              src="https://img.icons8.com/ios-glyphs/344/multiply.png"
              alt=""
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <Card.Body>
            <Card.Title as="h1">Verify Contact</Card.Title>
            <br />
            <Card.Text>
              {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
              <form action="" onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="">Mobile Number</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter Mobile Number"
                    aria-label="Username"
                    type="tel"
                    className="text-light"
                    aria-describedby="basic-addon1"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </InputGroup>
                <Button disable={disable} type="submit" variant="primary">
                  Send OTP
                </Button>
                <br />
                <br />

                <Link to="/signup" style={{ fontWeight: "bold" }}>
                  Login
                </Link>
                <br />
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
        <OTPModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </div>
  );
};

export default OTP;
