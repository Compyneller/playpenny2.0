import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import style from "./Disclaimer.module.scss";
const Disclaimer = () => {
  return (
    <div className={style.wrapper}>
      <NavBarComp />
      <Container
        className={style.container}
        style={{
          padding: "3rem 1rem ",
          border: "2px solid white ",
          borderRadius: "30px",
        }}
      >
        <h1>DISCLAIMER</h1>
        <br />
        <p>
          PlayPenny reserves the right to amend, modify, update, substitute,
          suspend or delete any information contained herein, including the
          information posted in any public area or chat room.
        </p>
        <br />
        <h5>Prohibited</h5>
        <p>
          Players are strictly prohibited from sending or posting any message
          that we deem as indecent, threatening, profanity, slandering,
          unlawful, abusive, harassing, defamatory, harmful, vulgar, obscene,
          racially offensive, hurting religious sentiments, sexually-
          orientated, or pornographic.
        </p>
        <br />
        <h5>Precaution</h5>
        <ul>
          <li>
            Viruses, worms, malware, spam zombies and any other harmful computer
            contaminant are inherent to electronic communication. Winner Games
            Private Limited does not warrant, guarantee or represent that our
            website or any information is free from all these threats.
          </li>
          <li>
            The Player has to exercise extra caution and must assume
            responsibility to take the necessary precautions to protect him/her
            against viruses or any other harmful contents.
          </li>
          <li>
            Trademarks, logos and all other intellectual property displayed on
            PlayPenny’s site are registered/unregistered marks of PlayPenny and
            no user has the right to use our copyright property.
          </li>
          <li>
            Reproducing any information available here is strictly prohibited
            and the copyright notices, trademarks, and related visual marks and
            logo, may not be removed from the information or any authorized.
          </li>
          <li>
            Any such unauthorized use would lead to a violation of copyright,
            trademark, and other laws, that may put you under trouble in both
            civil and criminal law.
          </li>
          <li>
            We do not endorse any of the commercial advertisements displayed on
            its website that seem to promote mercantile or any other services by
            third party agencies. Players have to respond to any such mercantile
            or any services advertised on PlayPenny.com at their own risk, and
            we must not be held responsible for loss, damages or any injury
            arising out of such responses.
          </li>
        </ul>
      </Container>
      <Footer />
    </div>
  );
};

export default Disclaimer;
