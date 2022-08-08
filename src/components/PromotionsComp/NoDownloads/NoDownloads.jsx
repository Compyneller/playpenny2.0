import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const NoDownloads = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Card className="shadow text-center">
        <Card.Body>
          <h3>FREE TO JOIN - NO DOWNLOAD REQUIRED.</h3>
          <br />
          <h5>Play Free Rummy Tournaments - Win Cash!</h5>
          <br />
          <Button variant="info">JOIN PAYPENNY</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NoDownloads;
