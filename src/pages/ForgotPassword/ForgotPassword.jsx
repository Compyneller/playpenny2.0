import React, { useState } from "react";
import "../Login/Login.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Alert, Container, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoginBg from "../Login/LoginBg";

import { useUserAuth } from "../../context/AuthContext";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const data = await resetPassword(email);
      setMessage(true);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/protect/add-cash");
    } catch (error) {
      setError(error.message);
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
            <Card.Title as="h1">Forgot Password</Card.Title>
            <br />
            <Card.Text>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && (
                <Alert variant="success">
                  Check your inbox for further instructions
                </Alert>
              )}
              <form action="" onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="">Email</label>
                <InputGroup className="my-3">
                  <Form.Control
                    placeholder="Enter your Email"
                    aria-label="Username"
                    className="text-light"
                    aria-describedby="basic-addon1"
                    type="mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                <Button type="submit" variant="primary">
                  Reset Password
                </Button>
                <br />
                <br />
                New user signup{" "}
                <Link to="/signup" style={{ fontWeight: "bold" }}>
                  Here.
                </Link>
                <br />
                <Link className="text-light" to="/login">
                  Login
                </Link>
              </form>
              <br />
              <Button variant="outline-light" onClick={handleGoogleSignin}>
                SignIn With Google
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ForgotPassword;
