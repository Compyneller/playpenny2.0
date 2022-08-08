import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import style from "./Bricks.module.scss";
import image from "../../assets/oie_4tNTL3mqdrDq.png";
const Bricks = () => {
  return (
    <div className={style.wrapper}>
      <Container style={{ padding: "3rem 1rem" }}>
        <h1>PLAYPENNY - THE JOY BEGINS</h1>
        <Row className="g-3">
          <Col
            sm={12}
            lg={12}
            className="d-flex align-items-center justify-content-center"
          >
            <Row className="g-3">
              <Col sm={12} md={6} lg={4}>
                <Card className={style.cards}>
                  <Card.Body>
                    <h3>The Top Choice Rummy Website</h3>
                    <li>Certified with RNG</li>
                    <li>Smooth & Easy User Interface</li>
                    <li>Available on PC & Browser </li>
                    <li>Play 24/7 with your friends or solo</li>
                    <li>Top Payments options available</li>
                    <li>Easy & Fast Cash Withdrawal</li>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Card className={style.cards}>
                  <Card.Body>
                    <h3>How to Play Rummy on Playpenny?</h3>
                    <li>No of Players - 2 to 6</li>
                    <li>No of Cards - 2 deck of cards</li>
                    <li>Each Player is dealt with 13 Cards</li>
                    <li>Player has to draw & discard cards in turn</li>
                    <li>Other cards from valid sequences or sets.</li>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Card className={style.cards}>
                  <Card.Body>
                    <h3>How to Login Playpenny?</h3>
                    <li>Browse the Playpenny website</li>
                    <li>New users click ‘Signup’ and enter no.</li>
                    <li>Enter OTP & login easily</li>
                    <li>Old users can directly login</li>
                    <li>Easy to use</li>
                    <li>Deposit & Withdraw directly</li>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bricks;
