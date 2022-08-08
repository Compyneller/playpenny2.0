import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./HowToPlay.module.scss";
import image from "../../assets/pablita_internet_news_transparent.gif";
import RBComp from "../../components/HowToPlayComp/RBComp";
import PRComp from "../../components/HowToPlayComp/PRComp";
import DRComp from "../../components/HowToPlayComp/DRComp";
import PoolComp from "../../components/HowToPlayComp/PoolComp";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import Footer from "../../components/Footer";
const HowToPlay = () => {
  const [toggleBtn, setToggleBtn] = useState("rb");
  return (
    <div className={style.wrapper}>
      <NavBarComp />
      <Container style={{ padding: "3rem 1rem" }}>
        <Row className="g-3">
          <Col
            sm={12}
            lg={4}
            className="d-flex flex-column justify-content-center"
          >
            <h3>
              Know the basics of Rummy, the rules of Rummy, and the
              terminologies in the Game.
            </h3>
            <p>
              Learn how to play the Game, also know about the different variants
              of the Game. Start winning real cash rewards in Online Rummy. Play
              Now!
            </p>
          </Col>
          <Col sm={12} lg={8}>
            <img src={image} className="w-100" alt="" />
          </Col>
        </Row>
        <Row className="g-3">
          <Col xs={6} sm={6} lg={3}>
            <Button
              className="w-100"
              variant={toggleBtn === "rb" ? "light" : "outline-light"}
              onClick={() => setToggleBtn("rb")}
            >
              RUMMY BASICS
            </Button>
          </Col>
          <Col xs={6} sm={6} lg={3}>
            <Button
              className="w-100"
              variant={toggleBtn === "pr" ? "light" : "outline-light"}
              onClick={() => setToggleBtn("pr")}
            >
              POINTS RUMMY
            </Button>
          </Col>
          <Col xs={6} sm={6} lg={3}>
            <Button
              className="w-100"
              variant={toggleBtn === "dr" ? "light" : "outline-light"}
              onClick={() => setToggleBtn("dr")}
            >
              DEALS RUMMY
            </Button>
          </Col>
          <Col xs={6} sm={6} lg={3}>
            <Button
              className="w-100"
              variant={toggleBtn === "pool" ? "light" : "outline-light"}
              onClick={() => setToggleBtn("pool")}
            >
              POOL RUMMY
            </Button>
          </Col>
        </Row>
        <Row className="g-3">
          <div className="w-100" style={{ padding: "3rem 1rem" }}>
            {toggleBtn === "rb" ? (
              <RBComp />
            ) : toggleBtn === "pr" ? (
              <PRComp />
            ) : toggleBtn === "dr" ? (
              <DRComp />
            ) : toggleBtn === "pool" ? (
              <PoolComp />
            ) : null}
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HowToPlay;
