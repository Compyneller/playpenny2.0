import React from "react";
import Footer from "../components/Footer";
import NavBarComp from "../components/NavBarComp/NavBarComp";
import BottomCard from "../components/PromotionsComp/BottomsCard/BottomCard";
import Daily from "../components/PromotionsComp/Daily/Daily";
import HotDeals from "../components/PromotionsComp/HotDeals/HotDeals";
import MidText from "../components/PromotionsComp/MidText/MidText";
import NoDownloads from "../components/PromotionsComp/NoDownloads/NoDownloads";
import Other from "../components/PromotionsComp/OtherPromotions/Other";
import PromHeader from "../components/PromotionsComp/PromHeader/PromHeader";
import RummyCode from "../components/PromotionsComp/RummyCode/RummyCode";
import TableComp from "../components/PromotionsComp/Table/TableComp";
import style from "./Promotion.module.scss";

const Promotion = () => {
  return (
    <div className={style.wrapper}>
      <NavBarComp />

      <HotDeals />
      <Other />
      <MidText />
      <TableComp />
      <RummyCode />
      <br />
      <br />
      <BottomCard />
      <NoDownloads />
      <Daily />
      <Footer />
    </div>
  );
};

export default Promotion;
