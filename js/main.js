
/*----- constants -----*/
const masterDeck = [];
var suits = ["spades", "diamonds", "clubs", "hearts"];
var cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// const suits = ['s', 'c', 'd', 'h'];
// const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
/*----- app's state (variables) -----*/
let deck =[]; 
let winner; //ip=in progress, "p"=player wins, "d"=dealer wins, "t"=tie, "pbj"=player blackjack, "dbj"=dealer blackjack
let playerDeck = [], dealerDeck = []; // arrays to hold cards
let playerCards = [], dealerCards = []
let bet, bankroll;
let playerScore = 0;

/*----- cached element references -----*/



/*----- event listeners -----*/
/*clicks


/*----- functions -----*/

function createDeck() {
	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cardValues.length; x++)
		{
            var card = {cardValue: cardValues[x], suit: suits[i]};
            if(parseInt(cardValues[x])){ card.num = x + 1}
            else if(cardValues[x] != "A") card.num = 10
            else {card.num = 11}
            deck.push(card);
            
		}
    }
    console.log(deck);
    return deck;
} 




// document.querySelector("dealbtn").addEventListener("click", dealCards);

function dealCards() {
    
    for (let i = 0; deck.length; i++) {
        let num = Math.floor(Math.random() * deck.length);
        if (i % 2) {
            playerDeck.push(deck.splice(num, 1)[0])
        } else {
            dealerDeck.push(deck.splice(num, 1)[0])
        }
    }

    playerCards.push(playerDeck[0]);
    playerDeck.shift();
    playerCards.push(playerDeck[0]);
    playerDeck.shift();
    
    dealerCards.push(dealerDeck[0]);
    dealerDeck.shift();
    dealerCards.push(dealerDeck[0]);
    dealerDeck.shift();
}
 

function countScore() {
    playerCards.forEach(function(playerCard) {
        console.log(playerCard);
        playerScore += playerCard.num 
    })
}

function playerHit() {
    playerCards.push(playerDeck[0]);
    playerDeck.shift();
}

function dealerHit() {
    dealerCards.push(dealerDeck[0]);
    dealerDeck.shift();    
}

 


function init() {
    createDeck()
    dealCards()
}
init();
/* 1. function for interpreting the value of player and dealer's cards. 
    Checks the sum of all the cards in the hand and determines whether an A should be 1 or 11.

    4. check for winner.

    5. function runs the code for when the dealer draws a card.

    6. runs when the player presses the hit button and simulates drawing a card.

    7. function for "stand", draws card for dealer and skips the player.
    */
   

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