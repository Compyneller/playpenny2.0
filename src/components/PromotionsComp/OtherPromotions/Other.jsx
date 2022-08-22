import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import style from "./Other.module.scss";
const Other = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <h1>Other Promotions</h1>
          <Row className="g-3">
            <Col sm={12} lg={12}>
              <Card
                className={style.cusCard}
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/stylish-black-friday-sale-label-background_1017-34629.jpg?w=826&t=st=1658901018~exp=1658901618~hmac=4d698a816ed87d2ee88cc2fcd1a6d9eacfd73f2eb0fa62daa2497417db5e8b27"
                />
                <Card.Body>
                  <Card.Title>Jubilant July</Card.Title>
                  <Card.Text>15% upto Rs.750</Card.Text>
                  <Button variant="info">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm={12} lg={6}>
          <h1>Upcoming</h1>
          <Card className={style.cusCard} style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-vector/spades-card-symbol-made-with-sparkles-background_1017-33702.jpg?w=1380&t=st=1658901134~exp=1658901734~hmac=144b0e31461f236e25a35ef2638de7d8bce64e36b90eaed419473e6aa1a4ff1c"
            />
            <Card.Body>
              <Card.Title>Marathon Challenge</Card.Title>
              <Card.Text>
                Jul 28th 2022, 3:00 pm to Jul 28th 2022, 11:59 pm
              </Card.Text>
              <Button variant="warning">Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Other;
