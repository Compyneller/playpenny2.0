import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import style from "./Card.module.scss";
const CardComp = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <Row classNam="g-3">
          <Col sm={12} lg={6} className="d-flex  align-items-center ">
            <Row className="g-3">
              <h1 className="text-center">BENEFITS OF PLAYPENNY</h1>
              <div className="col-6 ">
                <Card className={style.cus_card} style={{ height: "100%" }}>
                  <Card.Body style={{ padding: "4rem 0" }}>
                    {" "}
                    Register for FREE
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6">
                <Card className={style.cus_card} style={{ height: "100%" }}>
                  <Card.Body style={{ padding: "4rem 0" }}>
                    {" "}
                    First time registration bonus
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6">
                <Card className={style.cus_card} style={{ height: "100%" }}>
                  <Card.Body style={{ padding: "4rem 0" }}>
                    {" "}
                    Free rummy matches
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6">
                <Card className={style.cus_card} style={{ height: "100%" }}>
                  <Card.Body style={{ padding: "4rem 0" }}>
                    {" "}
                    Refer & Earn bonus
                  </Card.Body>
                </Card>
              </div>
            </Row>
          </Col>
          <Col sm={12} lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardComp;
