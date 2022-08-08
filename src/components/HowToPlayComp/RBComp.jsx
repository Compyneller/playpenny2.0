import React from "react";

const RBComp = () => {
  return (
    <>
      <h5>Rummy Basics</h5>
      <p>
        Rummy is the most played card game in India. There is no match to the
        excitement the Game carries with it. Rummy is commonly called as Paplu.
        It is also called as Classic Rummy, 13-card Rummy, and Indian Rummy.
        There are no proper records about the Origin of Rummy, although the
        limited records available that it has conquian origins. There is a
        widespread consensus that it is a combination of popular card games in
        USA, Gin Rummy and Rummy 500. The Game is played in INdia for several
        centuries and is more or less a family affair. It is widely played
        during local functions, family gatherings, picnics, marriage parties,
        and even in public transport where people commute.
      </p>
      <br />
      <h5>What is Indian Rummy?</h5>
      <p>
        Indian Rummy card game is played between 2 to 6 players. The Game is
        played with two decks of cards along with two face-Joker cards. To win
        the game, a player must make a valid declaration by picking and
        discarding cards from the closed and open decks. The deck formed by the
        discards of the players is called Open Deck, whereas the deck with the
        face of cards closed by which players cannot see the card is called a
        closed deck. The list of cards from lower to higher-order are- Ace, 1,
        2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, and, K. Ace card can be used as either
        one or as a face card when a player melds. E.g., A, 2, 3 or A, K, Q, J
      </p>
      <br />
      <h5>What is the Primary Objective in a Rummy card game?</h5>
      <p>
        The objective of the game is simple and clear. A player must arrange all
        the cards in the form of at least two sequences- of which one must be a
        pure sequence. The remaining can be either an impure sequence or set(s)
        depending on the arrangement of the card. A pure sequence is mandatory
        to make a valid declaration.
      </p>
      <br />
      <h5>Concepts in Rummy</h5>

      <h5>1. What is a Rummy Sequence?</h5>
      <p>
        Melding 3 or more consecutive cards of the same suit is called a
        Sequence, Ex: 5, 6, and 7 of Spade is a sequence. There are two types of
        Sequences- Pure and Impure Sequence.
      </p>

      <p>
        <b>Pure Sequence</b>- It is mandatory to make a successful declaration.
        When three or more successive cards are melded without using a joker
        card, you get a Pure Sequence. For Example 3♥ , 4♥ , 5♥ make a pure
        sequence.
      </p>

      <p>
        <b>Impure Sequence</b>- It is a sequence melded using a Joker card. For
        Example: If 6 of any suit be the joker for the Game, then 10 and Q of
        any suit can be melded with the joker card. Therefore the sequence turns
        to be 10♥, 6♣, Q♥ is the impure sequence.
      </p>

      <br />
      <h5>2. What is a Rummy Joker Card?</h5>
      <p>
        Joker is a card that can substitute any card to form a sequence. These
        cards are special and important in a Rummy Game. There are two types of
        Joker cards in Rummy.
      </p>
      <li>
        <b>Printed Joker-</b> The cards with joker images printed on them are
        the printed Jokers. You get to play two printed joker cards in a game.
      </li>
      <li>
        <b>Wild Joker-</b> At the start of every game, one card from the deck is
        chosen as the joker for the Game. What be the number value of the card,
        all the cards with the same number from all the suits turn to be joker
        cards. If 3 of Heart is chosen joker, then 3 of Spade, Diamond, and Club
        can also be used as joker cards in the Game.
      </li>
      <p>
        *Special Note: If a printed joker card turns to be the card picked as
        the joker, then Ace of all suits is considered Joker cards.
      </p>
      <br />
      <h5>3. How are points calculated in Rummy?</h5>
      <p>
        The card values are added up and the corresponding table value
        calculations are done when a declaration is made. The Face cards – Ace,
        King, Queen, and Jack- each carry 10 points. All the numerical cards own
        the same value as the rank value. i.e, 7 ♠ owns 7 points.
      </p>
      <br />
      <p>There are some specific scenarios while calculating points:-</p>
      <li>When a player drops in the very first chance in a game- 20 points</li>
      <li>When a player drops in the middle of the game- 40 points</li>
      <li>For a Wrong Declaration – 80 points</li>
      <li>When a player misses out 3 consecutive turns – 40 points</li>
      <li>
        Winning calculation in Points Rummy- (Total points opponents
        lose)*(Rupee value)- Rake fee
      </li>
      <li>
        Winning calculation in Deals Rummy- Total entry fee of opponents – Rake
        fee
      </li>
      <li>
        Winning calculation in Pool Rummy- (Entry fee)*(Total number of
        players)- Rake Fee
      </li>
      <br />
      <h5>4. What is a valid declaration?</h5>
      <p>
        A valid declaration must have one or more pure sequence with or without
        impure sequence or sets. Eg: 4♥ 5♥ 6♥ 7♥ |K♠ Q♠ J♠ |A♦ A♠ A♥ |5♦ 5♠ 5♣
      </p>
      <br />
      <h5>5. What is an Invalid Declaration?</h5>
      <p>
        There are several cases when you get to make an invalid declaration. A
        declaration turns invalid when
      </p>
      <br />
      <p>Case 1: Declaring without a pure sequence</p>
      <p>Eg: 4♦ 5♦ 7♦ 8♦ | A♣K♦ J♥ |5♣7♣8♣ | 2♥ 3♥ 5♥</p>
      <p>
        Case 2: A pure sequence isn’t accompanied by either a pure or impure
        sequence
      </p>
      <p>Eg: 4♥ 5♥ 6♥ | A♦ K♦ J♦ |4♠ 5♠ 7♠ 8♠ | 2♣ 3♣ 5♣</p>
      <p>Case 3: Declaring with a invalid set</p>
      <p>Eg: 4♥ 5♥ 6♥ | A♦ K♦ Q♦ | 2♣ 3♣ 4♣ | 7♣ 7♣ 7♠ 7♦</p>
      <p>Case 4: Declaring with less than 3 pairs</p>
      <p>Eg: A♣ 2♣ 3♣ 4♣ 5♣ 6♣ 7♣ 8♣ 9♣ | K♦ K♣ K♥ K♠</p>
      <br />
      <h5>How to Play Rummy?</h5>
      <li>
        The game is the same in all variance- only difference is the deals count
        in Deals and pool rummy.
      </li>
      <li>
        A random toss is made at the start of the game, and one card is randomly
        dealt to every player on table. The player receiving the maximum card
        value will start the game.
      </li>
      <li>To every player 13 cards are dealt</li>
      <li>
        One card will be place in the open deck, whereas the remaining will be
        on the closed deck.
      </li>
      <li>
        A card in random is chosen from the closed deck as the joker of the
        game.
      </li>
      <li>
        Players can use the “Sort” button available on screen to arrange the
        cards automatically in order of the suits. This can get you a better
        view on your cards.
      </li>
      <li>
        Player can pick and discard cards from the closed and open deck to form
        sequences and sets. The process of grouping cards is called Melding.
        Incase all the cards in the closed deck get used up, all the discarded
        cards are reshuffled and used as the closed deck.
      </li>
      <li>
        The player, who makes successful arrangement of cards in the form of
        sequences and sets, should declare their hand and are the winners of the
        game.
      </li>
      <br />
      <h5>Tips to win a Rummy Game:</h5>
      <p>There are some Rummy tips that could lift-up your Game.</p>
      <li>
        The primary goal for any rummy player is to have a pure sequence, so
        focus on building it.
      </li>
      <li>
        Discard high-value cards (Ace, King, Queen, and Jack) to be on the safer
        side.
      </li>
      <li>
        Make the best use of Joker cards to make the best of sequences and sets.
      </li>
      <li>
        Recheck the cards in hand before declaration. A wrong declaration will
        cost you 80 points.
      </li>
      <li>
        Be smart enough to decide on whether to drop the Game or to play the
        Game.
      </li>
    </>
  );
};

export default RBComp;
