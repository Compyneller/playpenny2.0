import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TableComp = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Table striped bordered responsive>
        <thead>
          <tr className="bg-dark text-light">
            <th>Date</th>
            <th>Rummy Bonus Code </th>
            <th>Rummy Bonus Offer</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-light">
            <td className="text-light">Applicable only on 1st deposit </td>
            <td className="text-light">WELCOME</td>
            <td className="text-light">100% Bonus upto Rs.5000</td>
          </tr>
          <tr className="text-light">
            <td className="text-light">Jul 1 - 31 </td>
            <td className="text-light">JULY2022 </td>
            <td className="text-light">Get 15% Bonus Points Upto Rs. 750</td>
          </tr>
          <tr className="text-light">
            <td className="text-light">Jul 1 - 8 </td>
            <td className="text-light">MSD22 </td>
            <td className="text-light">Get 20% Booster Bonus Upto Rs.1000</td>
          </tr>
          <tr className="text-light">
            <td className="text-light">Jul 9 - 15 </td>
            <td className="text-light">BAKRID22 </td>
            <td className="text-light">Get 10% Cash Bonus Upto Rs.500</td>
          </tr>
          <tr className="text-light">
            <td className="text-light">Jul 16 - 23 </td>
            <td className="text-light">MIZZLE750 </td>
            <td className="text-light">Get 15% Booster Bonus Upto Rs.750</td>
          </tr>
          <tr className="text-light">
            <td className="text-light">Jul 24 - 31 </td>
            <td className="text-light">DRSMASH </td>
            <td className="text-light">Get 10% Cash Bonus Upto Rs.500</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComp;
