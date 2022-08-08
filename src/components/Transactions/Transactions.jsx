import React from "react";
import { Card } from "react-bootstrap";

const Transactions = () => {
  return (
    <Card className="text-dark">
      <Card.Header as="h3">Transactions</Card.Header>
      <Card.Body>
        <h5>NO TRANSACTIONS DETAILS</h5>
      </Card.Body>
    </Card>
  );
};

export default Transactions;
