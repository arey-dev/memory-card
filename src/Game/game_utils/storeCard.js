const storedCards = [];

export function storeCard(id) {
  storedCards.push(id);
  console.log(storedCards)
}

export function isCardStored(id) {
  return storedCards.includes(id);
}

export function resetStoredCards() {
  storedCards.length = 0;
}

export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
