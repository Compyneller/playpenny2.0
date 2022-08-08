import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import style from "./Privacy.module.scss";

const RummyTips = () => {
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
        <h1>Rummy Tips</h1>
        <br />
        <p>
          Rummy is a popular card game played by millions of Indians everyday,
          who are always eager to score a win and be the champion. The rummy
          game on the PlayPenny has different variants, but the 13 card game is
          much popular & loved in India. The game's primary objective is to be
          the fastest in making pure and impure sequences. Players can pick and
          discard a card from a pile to form these sequences. Here are some
          simple tricks and tips for setting you ahead of the ‘pack.’ Best tips
          to win a rummy game:
        </p>
        <ul>
          <li>
            Get a pure sequence: A pure sequence is a consecutive set of cards
            of the same suit and is a game requirement. Hence, getting it
            quickly is essential. Do not keep on holding on to cards for longer
            than necessary in the hopes of making a sequence. If you have a 3H,
            5H, and 6H and get a 7H, then discard 3.
          </li>
          <li>
            Know your opponent: Keep track of what cards your opponent discards
            and picks. It gives you an insight into what cards they hold and
            their pattern of play.
          </li>
          <li>
            Discard high-value cards: Some people keep high-value cards, hoping
            to use them later in a sequence, but that is a wrong move as they
            eat away into your score if your opponent declares.
          </li>
          <li>
            Sort option: use the option to set out your cards more effectively.
            You can do it according to the suits. Alternate with a different set
            of colors to avoid confusion.
          </li>
          <li>
            Bluff your opponent by holding onto two-similar cards, and once a
            sequence is finished, discard the unused ones. Also, do some
            fishing, and pick up a card you know the opponent needs; this will
            confuse your opponents.
          </li>
          <li>
            Drop cards that are nearer to the chosen Joker. The reason is that
            it prevents the opponent from using the Joker effectively. For
            example, if the Joker is 5 of diamonds, then dropping a 4 of a
            similar suit ensures that the other player finds it difficult to use
            the Joker.
          </li>
          <li>
            Dropping from the game: There are penalties for dropping from an
            online rummy game, but it is still prudent to use this option in
            specific scenarios. When you have a weak hand, consider it, or when
            you find it difficult to form a sequence, use the option of a middle
            drop (missing after one move).
          </li>
          <li>
            Middle cards advantage: Middle cards are the most versatile and help
            make the maximum number of combinations. Retain your middle cards
            for longer. The middle cards can be used extensively hence they are
            instrumental in helping you win.
          </li>
          <li>
            Practice makes perfect: Use the practice games offered by the
            platform to learn the game and hone your skills.
          </li>
          <li>
            Jokers and how to use them: Use the Joker to complete a sequence
            set. Make use of a joker when making a higher points sequence. Avoid
            using it in a natural sequence.
          </li>
        </ul>
      </Container>
      <Footer />
    </div>
  );
};

export default RummyTips;
