
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

const cardsInPlay = [];

var checkForMatch = function () {
		if (cardsInPlay[0] === 2) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};


var flipCard = function () {
cardsInPlay.push(cards[cardId].rank);
if(cardsInPlay.length === 2) {
	checkForMatch();
}
console.log("User flipped " + cards[cardId].rank)
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)

};
}




var cardId=flipCard(0)
flipCard(2);











