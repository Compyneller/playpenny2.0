import React from "react";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./side.module.scss";
const MyAccountSide = () => {
  return (
    <Row className={`g-2 ${style.wrapper}`}>
      <div className="col-6 col-lg-12">
        <Link to="account-overview">
          <Card style={{ height: "100%" }}>
            <Card.Body>Account Overview</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-6 col-lg-12">
        <Link to="add-cash">
          <Card style={{ height: "100%" }}>
            <Card.Body>Add Cash</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-6 col-lg-12">
        <Link to="withdraw-cash">
          <Card style={{ height: "100%" }}>
            <Card.Body>Withdraw Cash</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-6 col-lg-12">
        <Link to="personal-detail">
          <Card style={{ height: "100%" }}>
            <Card.Body>Profile</Card.Body>
          </Card>
        </Link>
      </div>
      <div className="col-6 col-lg-12">
        <Link to="transactions">
          <Card style={{ height: "100%" }}>
            <Card.Body>View Transactions</Card.Body>
          </Card>
        </Link>
      </div>
    </Row>
  );
};

export default MyAccountSide;
