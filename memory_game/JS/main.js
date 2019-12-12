
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];


//cards[0] = "cardOne";
//cards[1] = "cardTwo";

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');

//console.log("User flipped queen");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
alert("You have a match!");
} else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
 alert("Sorry, try again!");
}

