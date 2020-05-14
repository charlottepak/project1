
/*----- constants -----*/
const masterDeck = [];
var suits = ["s", "d", "c", "h"];
var cardValues = ["A", "02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "Q", "K"];
let player;
let dealer;

/*----- app's state (variables) -----*/
let deck =[]; 
let winner;
let playerDeck = [], dealerDeck = []; // arrays to hold seperate decks
let playerCards = [], dealerCards = [] // arrays to hold the cards dealt to them
let bet, bankroll;
let playerScore = 0;
let dealerScore = 0;


/*----- cached element references -----*/



/*----- event listeners -----*/


/*----- functions -----*/


// creates the deck
function createDeck() { 
	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cardValues.length; x++)
		{
            var card = {cardValue: cardValues[x], suit: suits[i], cssClass: suits[i] + cardValues[x]};
            if(parseInt(cardValues[x])){ card.num = x + 1}
            else if(cardValues[x] != "A") card.num = 10
            else {card.num = 11}
            deck.push(card);
        }
    }

    return deck;
} 


// splits the deck into 2 decks to be the player's deck and dealer's deck
function dealCards() {
    document.getElementById("playerCards").innerHTML = "" 
    document.getElementById("dealerCards").innerHTML = ""

    for (let i = 0; deck.length; i++) {
        let num = Math.floor(Math.random() * deck.length);
        if (i % 2) {
            playerDeck.push(deck.splice(num, 1)[0])
        } else {
            dealerDeck.push(deck.splice(num, 1)[0])
        }
    }

    // gives the cards to the player and dealer's hands and removes them from their decks
    playerCards.push(playerDeck[0]);
    playerDeck.shift();
    playerCards.push(playerDeck[0]);
    playerDeck.shift();
    
    dealerCards.push(dealerDeck[0]);
    dealerDeck.shift();
    dealerCards.push(dealerDeck[0]);
    dealerDeck.shift();

    // displays the cards on the screen
    playerCards.forEach(function(card) {
        document.getElementById("playerCards").innerHTML += `<div class="${card.cssClass} card"></div>`
    })
    dealerCards.forEach(function(card, i) {

        // deturmins whether the card should be face up or down
        if (i === 0) {
            document.getElementById("dealerCards").innerHTML += `<div class="${card.cssClass} card"></div>`
        } else {
            document.getElementById("dealerCards").innerHTML += `<div class="card back"></div>`  
        }
        

})

       


}
 
// counts the player's score
function countPlayerScore() {
    playerScore = 0;
    playerCards.forEach(function(playerCard) {
        playerScore += playerCard.num 
    })
    document.querySelector("#playerScore").innerText = `score: ${playerScore}`;
}

// counts the dealer's score
function countDealerScore() {
    dealerScore = 0;
    dealerCards.forEach(function(dealerCard) {
        dealerScore += dealerCard.num
    })
}

// adds a card to the player's hand and adds to the score
function hit() {
    playerCards.push(playerDeck[0]);
    playerDeck.shift();
    document.getElementById("playerCards").innerHTML = ""
    playerCards.forEach(function(card) {
        document.getElementById("playerCards").innerHTML += `<div class="${card.cssClass} card"></div>`
 })
    

    countPlayerScore();
    if (playerScore > 21) {
        stand();
  
    }    
}

/////////////////wont workkkkkk
function playerAce() {
    if (playerCards = document.getElementById("playerCards").innerHTML += `<div class="${card.suit}A card"></div>`) {
        playerScore = playerScore - 10;
    }
}

function dealerAce() {
    if (dealerCards = document.getElementById("dealerCards").innerHTML += `<div class="${card.suit}A card"></div>`) {
        dealerScore = dealerScore - 10;
    }
}
/////////////////////////////////

// ends the game
function stand() {

    document.getElementById("dealerCards").innerHTML = ""
        // makes all the dealer cards face up
        dealerCards.forEach(function(card) {
            document.getElementById("dealerCards").innerHTML += `<div class="${card.cssClass} card"></div>`
        })

    // determines whether the dealer should add to their hand or not
    while (dealerScore <= 17) {
        dealerCards.push(dealerDeck[0]);
        let card = dealerDeck.shift();

         document.getElementById("dealerCards").innerHTML += `<div class="${card.cssClass} card"></div>`
          dealerScore += card.num
    }
    // displays the dealers score
    document.querySelector("#dealerScore").innerText = `score: ${dealerScore}`;
    checkForWinner()
    displayWinner()
}


// determins the winner
function checkForWinner() {
    if (playerScore === 21) {
        winner = player;
    } else if (playerScore > 21 & dealerScore < 21) {
            winner = dealer;
        } else if (dealerScore === 21 && playerScore !== 21) {
                winner = dealer;
            } else if (playerScore === 21 && dealerScore !== 21) {
                } else if (playerScore > dealerScore && playerScore < 21) {
                    winner = player;
                    } else if (playerScore < dealerScore && dealerScore < 21) {
                         winner = dealer;
                        } else if (dealerScore > 21 && playerScore < 21) {
                            winner = player;
                            } else if (playerScore > 21 && dealerScore > 21) {
                                winner = null;
                                } else winner = null;
    }

// displays the winner
function displayWinner() {
    if (winner === player) {
        document.querySelector("#displayWinner").innerText = `YOU WIN!`;
    } else if (winner === dealer) {
            document.querySelector("#displayWinner").innerText = `DEALER WINS!`;
        } else {
                document.querySelector("#displayWinner").innerText = `TIE`;
            }

        }

// clears the board to restart the game
function restart() {
    winner = null; 
    document.querySelector("#displayWinner").innerText = ``;
    playerScore = null;
    dealerScore = null;
    document.getElementById("playerCards").innerHTML = "" 
    document.getElementById("dealerCards").innerHTML = ""
    document.querySelector("#playerScore").innerText = ``;
    document.querySelector("#dealerScore").innerText = ``;
    
}



function init() {
    createDeck()
    dealCards()    
    countPlayerScore()
    countDealerScore()
}
init();