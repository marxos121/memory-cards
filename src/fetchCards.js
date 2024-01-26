let deck = null;

async function prepareDeck() {
  const apiURL = `https://www.deckofcardsapi.com/api/deck/new/draw/?count=52`;
  const response = await fetch(apiURL);
  deck = await response.json();
}

function fetchCards(count, clicked = null) {
  if (!deck) {
    return [];
  }

  //Draw count number of cards. Could've used API but this way is quicker,
  //Just need to use a set to make sure cards drawn are unique
  let indexesSet = new Set();
  while (indexesSet.size < count) {
    let to_draw = Math.floor(Math.random() * 52);
    indexesSet.add(to_draw);
  }

  //Now, check to make sure that at least 1 card hasn't been clicked before
  let indexes = Array.from(indexesSet);
  if (clicked) {
    let unclickableCards = 0;
    for (let index of indexes) {
      if (clicked.has(deck.cards[index].code)) {
        unclickableCards++;
      }
    }

    //if all drawn cards have already been clicked
    //then the player has no valid move available,
    //we need to fix that - let's force at least 1 card to be valid
    if (unclickableCards === count) {
      const indexToReplace = Math.floor(Math.random() * count);
      let to_draw = Math.floor(Math.random() * 52);
      while (clicked.has(deck.cards[to_draw].code)) {
        to_draw = Math.floor(Math.random() * 52);
      }
      indexes[indexToReplace] = to_draw;
    }
  }

  let ret = [];
  for (let cardIndex of indexesSet) {
    ret.push({
      code: deck.cards[cardIndex].code,
      image: deck.cards[cardIndex].images.png,
    });
  }

  return ret;
}

export { prepareDeck, fetchCards };
