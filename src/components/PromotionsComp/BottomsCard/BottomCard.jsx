import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import style from "./Bottom.module.scss";
const BottomCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.bg}></div>
      <Container>
        <Row className="g-3">
          <Col sm={12} lg={4}>
            <Card className={style.cusCard}>
              <Card.Body>
                <h5>Best Gaming Experience</h5>
                <p>Rs.5000 First Deposit Bonus.</p>
                <p>Rs.55000 Daily Free Tournaments.</p>
                <p>Join & Win Rs.25 free.</p>
                <Button variant="info">MORE PROMOTIONS</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card className={style.cusCard}>
              <Card.Body>
                <h5>Rummy Variant Available</h5>
                <p>Pool Rummy.</p>
                <p>Deals Rummy.</p>
                <p>Points Rummy.</p>
                <Button variant="info">REGISTER WITH US</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card className={style.cusCard}>
              <Card.Body>
                <h5>PayEasy and Redeem Easy</h5>
                <p>Credit/Debit Cards.</p>
                <p>Net Banking</p>
                <p>48 Hours NEFT Redeems.</p>
                <Button variant="info">JOIN US NOW</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomCard;
