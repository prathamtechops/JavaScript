const generateDeck = () => {
    const suits = ["clubs", "hearts", "spades", "diamode"];
    const cards = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
    ];

    const desk = [];
    for (let card of cards) {
        for (let suit of suits) {
            desk.push({ card: card, suit: suit });
        }
    }

    return desk;
};

const myDeck = generateDeck();

const checkScore = (hand) => {
    let totalScore = 0;
    for (const cardObj of hand) {
        if (
            cardObj.card === "King" ||
            cardObj.card === "Queen" ||
            cardObj.card === "Jack"
        )
            totalScore += 10;
        else if (cardObj.card === "Ace") totalScore += 1;
        else totalScore += parseInt(cardObj.card);
    }

    return totalScore;
};

const drawCard = (deck) => {
    const index = Math.floor(Math.random() * deck.length);
    const card = deck[index];
    deck.splice(index, 1);
    return card;
};
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

while (true) {
    playerHand.push(drawCard(myDeck));
    const playerScore = checkScore(playerHand);
    let dealerScore = checkScore(dealerHand);
    if (playerScore > 21) {
        console.log(`You lose! Your final score is ${playerScore}
        while dealer score ${dealerScore}`);
        break;
    }
    if (playerScore === 21) {
        console.log(`You win! Your final score is ${playerScore}
        while dealer score ${dealerScore}`);
        break;
    }
    dealerHand.push(drawCard(myDeck));
    dealerScore = checkScore(dealerHand);
    if (dealerScore > 21) {
        console.log(`You win! Your final score is ${playerScore}
        while dealer score ${dealerScore}`);
        break;
    }
    if (dealerScore === 21) {
        console.log(`You lose! Your final score is ${playerScore}
        while dealer score ${dealerScore}`);
        break;
    }
}

console.log("Ending playerhand ", playerHand);
console.log("Ending playerScore ", checkScore(playerHand));
console.log("Ending dealerhand ", dealerHand);
console.log("Ending dealerScore ", checkScore(dealerHand));
