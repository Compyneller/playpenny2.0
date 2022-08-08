import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import style from "./Privacy.module.scss";

const Faq = () => {
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
        <h1>FAQ-</h1>
        <br />
        <p>
          <b>Q1- What is a Rummy Card game?</b>
        </p>
        <p>
          <b>A1-</b> Rummy is a group of card games which is extremely popular
          in India. Rummy card games belong to the category of draw and discard
          card games where you have to match similar card types.
        </p>
        <br />
        <p>
          <b>Q2- How to play rummy online?</b>
        </p>
        <p>
          <b>A2-</b>
          <ol>
            <li>Sign up at PlayPenny</li>
            <li>
              Read the rules properly and master the rummy rules in our site to
              know about the rummy game.
            </li>
            <li>
              Get started with free games & once you feel confident start
              playing with cash.
            </li>
          </ol>
        </p>
        <br />
        <p>
          <b>Q3- Is my cash safe at PlayPenny? </b>
        </p>
        <p>
          <b>A3-</b> After mastering your skills by playing practice games,
          players can move to cash games. They can add cash through several
          payment methods integrated in our platform. Our platform is secured
          with a SSL certificate and it is safe and secure to perform online
          transactions.
        </p>
        <br />
        <p>
          <b>Q4- Is playing online rummy legal in India?</b>
        </p>
        <p>
          <b>A4-</b> Yes, playing online rummy is declared as legal by the
          Honorable Supreme Court of India as rummy is considered as a skill
          game. However, as per state legislations on online rummy, players from
          AP, Telangana, Assam, and Odisha are restricted to play in our
          platform.
        </p>
        <br />
        <p>
          <b>Q5- Can I play with my friends?</b>
        </p>
        <p>
          <b>A5-</b>
          You can invite your friends & family and play rummy online with them.
          And in return, PlayPenny will give you rewards on every successful
          invite.
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default Faq;
