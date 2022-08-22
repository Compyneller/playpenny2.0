import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import style from "./Bottom.module.scss";
import { useNavigate } from "react-router-dom";
const BottomCard = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <div className={style.bg}></div>
      <Container>
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <Card className={style.cusCard}>
              <Card.Body>
                <h5>Rummy Variant Available</h5>
                <p>Pool Rummy.</p>
                <p>Deals Rummy.</p>
                <p>Points Rummy.</p>
                <Button variant="info" onClick={() => navigate("/otp")}>
                  REGISTER WITH US
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={6}>
            <Card className={style.cusCard}>
              <Card.Body>
                <h5>PayEasy and Redeem Easy</h5>
                <p>Credit/Debit Cards.</p>
                <p>Net Banking</p>
                <p>48 Hours NEFT Redeems.</p>
                <Button variant="info" onClick={() => navigate("/login")}>
                  JOIN US NOW
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomCard;
