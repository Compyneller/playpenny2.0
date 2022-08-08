import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bricks from "../components/Bricks/Bricks";
import CardComp from "../components/Cards/CardComp";
import Footer from "../components/Footer";
import HeaderComp from "../components/HeaderComp/HeaderComp";
import NavBarComp from "../components/NavBarComp/NavBarComp";
import Rewards from "../components/Rewards/Rewards";
import TopMostComp from "../components/TopMostComp/TopMostComp";
import Winner from "../components/Winner/Winner";

const Home = () => {
  return (
    <>
      <div className="navbarContainer">
        <NavBarComp bg="transparent" />
      </div>
      <HeaderComp />
      <TopMostComp />
      <CardComp />
      <Winner />
      <Bricks />
      <Rewards />
      <Footer />
    </>
  );
};

export default Home;
