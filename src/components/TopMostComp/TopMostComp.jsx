import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../TopMostComp/TopMostComp.module.scss";
import image from "../../assets/6037719.jpg";
const TopMostComp = () => {
  return (
    <div className={style.wrapper}>
      <Container style={{ padding: "3rem 1rem" }}>
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <img
              src={image}
              className="w-100"
              alt=""
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Col>
          <Col sm={12} lg={6} className={style.content}>
            <h1>PLAYPENNY - TOPMOST WEBSITE TO PLAY POPULAR RUMMY GAMES</h1>
            <h5>
              Register for free with Playpenny and start playing rummy online.
              Playpenny is a user-friendly website which offers multiple games
              online. Show us your rummy skills and win exciting prizes.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopMostComp;
