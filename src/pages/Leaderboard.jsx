import React from "react";
import Footer from "../components/Footer";
import LeaderBoardComp from "../components/LeaderBoardComp/LeaderBoardComp";
import NavBarComp from "../components/NavBarComp/NavBarComp";

const Leaderboard = () => {
  return (
    <>
      <NavBarComp bg="#0D1043" />

      <LeaderBoardComp />
      <Footer />
    </>
  );
};

export default Leaderboard;
