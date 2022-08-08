import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/18973620 [Converted].png";
import style from "./Reward.module.scss";
const Rewards = () => {
  return (
    <div className={style.wrapper}>
      <Container style={{ padding: "3rem 1rem" }}>
        <Row className="g-3">
          <Col sm={12} lg={8} className={style.content}>
            <h1>
              GET REWARDS, DOUBLE SATISFACTION & NEVER ENDING FUN- PLAY ONLINE
              RUMMY ON PLAYPENNY
            </h1>
            <h5>
              Are you bored from the tantrums of your busy life? Play online
              rummy on Playpenny and win exciting rewards, get a bonus, and even
              a huge cash prize. As we know, rummy is the most popular game of
              the ages. Whether it’s a teenager or a retired grandpa, rummy
              makes all of us excited about the fun it offers us while playing
              it. We all are familiar with the existence of digitalization as
              technology is updating every second of the clock! So, it will be
              no less than a joy playing your favorite cards online, anywhere &
              anytime. Playpenny offers you the best user-friendly platform that
              will provide you the best gaming experience regardless of whether
              you're a rummy newbie or a veteran. Enjoy the best comfort of
              playing online rummy at your own place, any time of the day. Get
              the super services at Playpenny which is the safest, fastest &
              easiest!
            </h5>
          </Col>
          <Col sm={12} lg={4}>
            <img
              src={image}
              alt=""
              className="w-100"
              style={{ borderRadius: "10px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rewards;
