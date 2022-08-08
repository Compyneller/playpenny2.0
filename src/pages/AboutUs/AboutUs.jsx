import React from "react";
import style from "./AboutUs.module.scss";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/Clip_recruting_ad_transparent_by_Icons8.gif";
import image2 from "../../assets/Clip_Brainstorm_transparent_by_Icons8.gif";
import Footer from "../../components/Footer";
const AboutUs = () => {
  return (
    <div className={style.wrapper}>
      <NavBarComp />
      <Container style={{ padding: "3rem 1rem" }}>
        <Row className="g-3">
          <Col
            sm={12}
            lg={4}
            className="d-flex flex-column align-items-start text-light justify-content-center"
          >
            <h1>ABOUT US </h1>
            <p>
              PlayPenny is an online gaming website, which provides players a
              platform to play online 13 cards and rummy games.PlayPenny
              provides you with the ultimate 13-card rummy experience and also
              an opportunity to win exciting cash prizes. We present unique
              features to provide our players with an unforgettable gaming
              experience and we always strive to deliver the Best Rummy
              Experience to our players. Playing at PlayPenny will fill your
              pockets & also a powerful dose of entertainment.
            </p>
          </Col>
          <Col sm={12} lg={8}>
            <img src={image} className="w-100" alt="" />
          </Col>
        </Row>
        <Row className="g-3">
          <Col sm={12} lg={8}>
            <img src={image2} className="w-100" alt="" />
          </Col>
          <Col
            sm={12}
            lg={4}
            className="d-flex flex-column align-items-start text-light justify-content-center"
          >
            <h1>Who are we?</h1>
            <p>
              PlayPenny has a dedicated team of designers and developers with
              huge experience in the online gaming platform. The exciting theme,
              smooth user experience, and vibrant design let our gamers play
              without any hassle. The high standard of the PlayPenny in the
              gaming industry will give you the best experience on the rummy
              platform for the community of online players. Start playing rummy
              games and win exciting prizes & bonuses.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
