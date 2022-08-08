import React from "react";
import { Container } from "react-bootstrap";
import style from "./Leaderboard.module.scss";
import image from "../../assets/winners.png";
const LeaderBoardComp = () => {
  return (
    <div className={style.wrapper}>
      <Container className="d-flex" style={{ padding: "3rem 1rem" }}>
        <img src={image} alt="" className="w-75 m-auto" />
      </Container>
    </div>
  );
};

export default LeaderBoardComp;
