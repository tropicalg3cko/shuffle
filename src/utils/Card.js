export function getRandomInt() {
  let min = 2;
  let max = 6;
  return Math.floor(Math.random() * (max - min) + min);
}

export function createDeck() {
  const suits = ["Club", "Diamond", "Spade", "Heart"];
  const numbers = [
    "Ace",
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
  const playingCards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      let card = { number: numbers[j], suit: suits[i] };
      playingCards.push(card);
    }
  }
  return playingCards;
}
