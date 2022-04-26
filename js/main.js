let deckID = '';

const player1 = {
  wins: 0,
  deck: [],
};

const player2 = {
  wins: 0,
  deck: [],
};

//Get a deck
fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json())
.then(data => {
  console.log(data)
  deckID=data.deck_id

  //deal each player deck
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=26`)
  .then(res => res.json())
  .then(data => {
    console.log('p1 deck', data)
    player1.deck = data.cards
    console.log(player1)
  })

  fetch(`https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=26`)
  .then(res => res.json())
  .then(data => {
    console.log('p2 deck', data)
    player2.deck = data.cards
    console.log(player2)
  })
})
.catch(err => console.error(err))


