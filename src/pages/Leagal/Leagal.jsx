import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import style from "./Privacy.module.scss";

const Leagal = () => {
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
        <h1>Is Online Rummy Legal in India?</h1>
        <br />
        <p>
          Gambling, according to the definition of the Supreme Court, is betting
          and wagering on games of chances excluding the games which require
          skills. Quoting the 1996 Judgment by Supreme Court-
        </p>
        <p>
          The expression 'gaming' in the two Acts has to be interpreted in the
          light of the law laid-down by this Court in the two 1957 cases,
          wherein it has been authoritatively held that a competition which
          substantially depends on skill is not gambling. Gaming is the act or
          practice of gambling on a game of chance. It is staking on chance
          where chance is the controlling factor. 'Gaming' in the two Acts
          would, therefore, mean wagering or betting on games of chance. It
          would not include games of skill like horse racing."
        </p>
        <p>
          A game of skill, on the other hand - although the element of chance
          necessarily cannot be entirely eliminated --is one in which success
          depends principally upon the superior knowledge, training, attention,
          experience and adroitness of the player. Golf, chess and even Rummy
          are considered to be games of skill. The Courts have reasoned that
          there are few games, if any, which consist purely of chance or skill,
          and as such a game of chance is one in which the element of chance
          predominates over the element of skill, and a game of skill is one in
          which the element of skill predominates over the element of chance. It
          is the dominant element --"skill" or "chance" -- which determines the
          character of the game."
        </p>
        <p>
          According to a judgment by Supreme Court on 1968 <br />
          “The game of rummy is not a game entirely of chance like the
          'three-card' game. The 'three-card' game, which goes under different
          names such as 'flush', 'brag', etc is a game of pure chance. Rummy, on
          the other hand, requires a certain amount of skill because the fall of
          the card has to be memorized and their building up of Rummy requires
          considerable skill in holding and discarding cards. <br />
          So, it is pretty evident that the skill set of the player determines
          the result of the game. Further quoting other judgments in support to
          our claim that Online Rummy is legal;
        </p>
        <ul>
          <li>
            Supreme Court - 1967 - State of Andhra Pradesh v. K. Satyanarayana-
            Rummy is a game of skill - The Supreme Court of India ruled that
            Rummy requires a certain amount of skill because the fall of the
            card has to be memorized. Decision has been relied on in various
            subsequent judgments.
          </li>
          <li>
            Karnataka HC – 1982 - State of Karnataka v. Anantha Swamy Iyer -
            Rummy for stakes to be legal - “The game of Rummy with cards is not
            a game of chance but a game of skill. The collection of commission
            from the members of the club playing Rummy does not make it a
            gambling house. Thus, it does not amount to any offense.”
          </li>
          <li>
            In 2002 Andhra Pradesh High Court in the case of State of Andhra
            Pradesh v. D Krishna Kumar said “Playing rummy even for stakes or
            money does not violate provisions of the Andhra Pradesh Gaming Act,
            1974. The statutes specifically are worded to save games of skill
            from any criminal liability.”
          </li>
          <li>
            Madras High court in 2011 mentioned that the 13-card games like
            Rummy is a game of skill, and not gambling or game of chance.
            Justice S Rajeswaran, relying on a Supreme Court order of 1968
            vintage, said: "The game of Rummy is mainly and predominantly a game
            of skill."
          </li>
          <li>
            Moreover on Aug 13, 2015, Supreme Court while hearing an appeal
            challenging a Madras High Court ruling that playing rummy with
            stakes amounted to gambling, ruled that the verdict of this case
            would not impact online gaming sites.
          </li>
        </ul>
        <br />
        <p>
          Further, the Public Gambling Act, which is the central law on gambling
          and most subsequent state laws on the subject substantially state that
          "nothing in this Act shall apply to games of mere skill wherever
          played". The Rummy games are protected by the Constitution of India
          under Article 19[1] (g).
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default Leagal;
