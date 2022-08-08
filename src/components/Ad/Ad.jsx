import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../assets/2361365.png";
const Ad = () => {
  return (
    <Card
      style={{
        width: "100%",
        backgroundImage: `url(${image})`,
        minHeight: "35vh",
        backgroundSize: "100% 100%",
      }}
    >
      <Card.Body className="d-flex justify-content-center align-items-end">
        <Link to="add-cash">
          <Button variant="primary">Play Rummy Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Ad;
