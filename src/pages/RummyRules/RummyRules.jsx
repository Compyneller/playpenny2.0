import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import style from "./Privacy.module.scss";

const RummyRules = () => {
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
        <h1>Rummy Rules-</h1>
        <br />
        <p>
          The Indian Rummy game is played with two decks of cards with two
          Jokers. Cards in four suits, from low to high: Ace 2 3 4 5 6 7 8 9 10
          Jack Queen King. <br /> The Ace card can be used as 1 or a face card
          when making the sets. Rummy rules are integral to success in rummy.
          Following the rummy rules properly means the battle is half won and
          then comes the rummy strategies. A minimum of 2 players and a maximum
          of 6 players can participate in 13 card rummy.
        </p>
        <br />
        <h5>Objective:</h5>
        <p>
          The main objective of the 13 card rummy game is to arrange all the 13
          cards dealt into sets or sequences. In order to win, you must have at
          least 2 sequences out of which one must be a pure sequence (without
          including joker) and the remaining cards must be arranged in sets or
          sequences.
        </p>
        <br />
        <h5>Set:</h5>
        <p>
          A set is made by three or four cards of the same rank from different
          suits. (J, J, J of different suits) <br />
          Please note when you are using 2 decks or more you cannot use the same
          card twice in a set for instance. 6 ♠ 6 ♠ 6 ♥ cannot be considered as
          a valid set in such cases
        </p>
        <br />
        <h5>Sequence or Run:</h5>
        <p>
          Three or four consecutive cards from a same suit is called sequence
          (eg: 3♠,4♠ ,5♠ is a sequence)
        </p>
        <br />
        <h5>Pure Sequence:</h5>
        <p>
          One pure sequence is mandatory in the game of Rummy to declare
          victory. Three or 4 cards of the same suit without a joker can be
          referred to as Pure sequence. 3♠ 4♠ 5♠ is a pure sequence.
        </p>
        <br />
        <h5>Caution:</h5>
        <p>
          When you are using 2 decks or more you cannot use the same card twice
          in a set for instance. 6 ♠ 6 ♠ 6 ♥ cannot be considered as a valid set
          in such cases.
        </p>
        <br />
        <h5>Wild card:</h5>
        <p>
          A card generated randomly at the beginning of the rummy game that can
          take the place of any card in a run or a set is called Wild card. They
          are commonly referred to as Jokers. As it is highly improbable to meld
          all the 13 cards dealt into pure sets and sequences, Wild cards come
          in handy as they act as a substitute for the card missing in a set or
          a sequence.
        </p>
        <br />
        <h5>Usage of the wild card:</h5>
        <ul>
          <li>
            A wild card is randomly auto generated at the beginning of the game
            and it can be substituted for any card while making a set or
            sequence eg: Suppose if 7♠ turns to be the wild card, you can use 7
            from any suit while making a set or a sequence. 2♠ 3♠ 7♣ is a valid
            sequence since 7 is the joker.
          </li>
          <li>One or more Wild cards can be used to complete a game</li>
          <li>
            In case a printed joker is selected as a wild card, then ace card
            (A) of any suit can be used as a wild card.
          </li>
        </ul>
        <br />
        <h5>Toss:</h5>
        <p>
          The toss will determine which player is going to make the first move.
          Every player in a table is given a system generated random open card.
          The player with the highest hand card is the winner and he gets to
          start the game. The ranking of suits is as follows
          <ul>
            <li>Spades are the 1st highest suit</li>
            <li>Hearts are the 2d highest suit</li>
            <li>Diamonds are the 3rd highest suit</li>
            <li>Clubs are the 4th highest suit</li>
          </ul>
          <br />
          Eg: If 6 players get A♣, A♠, A♦, A♥, 10♣, 10♠ respectively, then the
          one with A♠ is the winner of the toss and he gets to make the first
          move.
        </p>
        <br />
        <h5>Game Play:</h5>
        <ul>
          <li>
            A random toss is made in the beginning, where a card is randomly
            dealt to all players and the player with the highest hand card is
            the winner and he gets to start the game
          </li>
          <li>13 cards are dealt to each player</li>
          <li>
            First card is placed in the open deck to indicate that the game has
            started. Remaining cards are placed face-down in the closed deck
            slot.
          </li>
          <li>
            Players can then arrange their card based on the suits using the
            sort button provided by us.
          </li>
          <li>
            Players during their turn can pick a card from either open or closed
            deck and should discard the hand card on the open desk.
          </li>
          <li>
            The player who arranges all the 13 cards in their hands in sets and
            sequences are declared as winners. Please note that the player need
            to have at least two sequences, one of which must be a pure sequence
            (without Jokers) and other cards arranged in sequences and/or sets
          </li>
          <li>
            After arranging the 13 cards in sets and sequences, the player
            should discard the final card on the finish slot to declare the
            game. If all the sets and sequences are valid as per the rules, the
            player wins with 0 points and the points of the losing players are
            calculated based on the value of cards remaining in their hands.
          </li>
          <li>
            For a successful declaration, the player needs at least two
            sequences at least , only then our system will recognize it as a
            valid declaration. Players must group their sets/sequences
            accordingly as mentioned above and then go for the declaration.
            Declaring with less than 2 combinations will constitute an invalid
            declaration.
          </li>
          <li>
            It is important to have a firm grasp of the rummy rules in order to
            carry out all the steps mentioned above.
          </li>
        </ul>
      </Container>
      <Footer />
    </div>
  );
};

export default RummyRules;
