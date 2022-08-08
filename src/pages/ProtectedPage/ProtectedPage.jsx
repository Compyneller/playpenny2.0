import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ad from "../../components/Ad/Ad";
import MyAccountComp from "../../components/MyAccountComp/MyAccountComp";
import ProtectedNavBar from "../../components/ProtectedNavBar/ProtectedNavBar";
import style from "./ProtectedPage.module.scss";
const ProtectedPage = () => {
  return (
    <div className={style.wrapper}>
      <ProtectedNavBar />
      <Container className={style.container}>
        <Row className="g-3">
          <Col sm={12} lg={2}>
            <Row className="g-3">
              <Col sm={6} lg={12}>
                <Ad />
              </Col>
              <Col sm={6} lg={12}>
                <Ad />
              </Col>
            </Row>
          </Col>
          <Col sm={12} lg={8}>
            <MyAccountComp />
          </Col>
          <Col sm={12} lg={2}>
            <Row className="g-3">
              <Col sm={6} lg={12}>
                <Ad />
              </Col>
              <Col sm={6} lg={12}>
                <Ad />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProtectedPage;
