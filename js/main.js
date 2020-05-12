
/*----- constants -----*/
const masterDeck = [];
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
/*----- app's state (variables) -----*/
let deck; 
let winner; //ip=in progress, "p"=player wins, "d"=dealer wins, "t"=tie, "pbj"=player blackjack, "dbj"=dealer blackjack
let playerCards, dealerCards; // arrays to hold cards
let bet, bankroll;

/*----- cached element references -----*/



/*----- event listeners -----*/
/*clicks


/*----- functions -----*/
/*shuffle cards
find winner
    if playerScore > dealerScore {
        player wins
    }
    elseif dealerScore > playerScore {
        dealer wins
    }

count score
    score = cardValues ++

deturmine "push(ties)"
    if dealerScore = playerScore {
        push
    }

deturmine "blackjack(exactly 21)"
    if score = 21 {
        blackjack 
    }

deturmine "bust(> 21)"
    if score > 21 {
        bust
    }

deturmine A
    if score < 21 {
        A = 11
    }
    elseif score > 21 {
        A = 1
    }
*/
const dealtCards = document.querySelectorAll("#cards DIV");
const shuffledDiv =document.getElementById('cards');

function shuffledDeck(deck) {
    const tempDeck = [...masterDeck];
    shuffledDeck = [];
    while(tempDeck.length) {
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        shuffledDeck.push(tempDeck.splice(rndIdx,1)[0]);
    }
    renderDeckInDiv(shuffledDeck, shuffledDiv);

}
function deal(shuffledDeck) {
    document.getElementById("cards").classList.add(items[Math.floor(Math.random()*items.length)]);

}


//jims code//////////////////////////////////////////////////

const masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let shuffledDeck;

/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderShuffledDeck);

/*----- functions -----*/
function renderShuffledDeck() {
  // Create a copy of the masterDeck (leave masterDeck untouched!)
  const tempDeck = [...masterDeck];
  shuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  // Use reduce when you want to 'reduce' the array into a single thing - in this case a string of HTML markup 
  const cardsHtml = deck.reduce(function(html, card) {
    return html + `<div class="card ${card.face}"></div>`;
  }, '');
  container.innerHTML = cardsHtml;
}

function buildMasterDeck() {
  const deck = [];
  // Use nested forEach to generate card objects
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        // The 'face' property maps to the library's CSS classes for cards
        face: `${suit}${rank}`,
        // Setting the 'value' property for game of blackjack, not war
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}

renderShuffledDeck();





/* 1. function for interpreting the value of player and dealer's cards. 
    Checks the sum of all the cards in the hand and determines whether an A should be 1 or 11.

    2. determine if the player should gain or lose money based on the winner.
    Adds or subjects the bet amount to the players money.

    3. reset everything except the player's money.

    4. check for winner.

    5. function runs the code for when the dealer draws a card.

    6. runs when the player presses the hit button and simulates drawing a card.

    7. function for "stand", draws card for dealer and skips the player.

