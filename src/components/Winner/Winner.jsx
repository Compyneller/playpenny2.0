import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Winner.module.scss";
import image from "../../assets/6037680.png";
const Winner = () => {
  return (
    <div className={style.wrapper}>
      <Container style={{ padding: "3rem 1rem" }}>
        <Row classNam="g-3">
          <Col sm={12} lg={6} className={style.content}>
            <h1>PLAYPENNY- YOUR FAVORITE RUMMY SITE</h1>
            <h5>
              Playpenny offers the 13 cards classic Rummy game with an exciting
              bonus and gets the cash prizes from the best online rummy site.
              Whether you are bored in your home, tired from your boss or
              traveling in outstation, Playpenny is always with you! Register,
              Login, Play free rummy as well as rummy for cash and win huge cash
              prizes.
            </h5>
          </Col>
          <Col sm={12} lg={6}>
            <img src={image} className="w-100" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Winner;
