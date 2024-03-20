document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'Tyrion Lannister',
      img: 'images/g1.jpg'
    },
    {
      name: 'Tyrion Lannister',
      img: 'images/g1.jpg'
    },
    {
      name: 'Daenerys Targaryen',
      img: 'images/g2.webp'
    },
    {
      name: 'Daenerys Targaryen',
      img: 'images/g2.webp'
    },
    {
      name: 'Jon Snow',
      img: 'images/g3.webp'
    },
    {
      name: 'Jon Snow',
      img: 'images/g3.webp'
    },
    {
      name: 'Bran Stark',
      img: 'images/g4.webp'
    },
    {
      name: 'Bran Stark',
      img: 'images/g4.webp'
    },
    {
      name: 'Arya Stark',
      img: 'images/g5.jpg'
    },
    {
      name: 'Arya Stark',
      img: 'images/g5.jpg'
    },
    {
      name: 'Joffrey Baratheon',
      img: 'images/g6.webp'
    },
    {
      name: 'Joffrey Baratheon',
      img: 'images/g6.webp'
    },
    {
      name: 'Khal Drogo',
      img: 'images/g7.webp'
    },
    {
      name: 'Khal Drogo',
      img: 'images/g7.webp'
    },
    {
      name: 'Maester Aemon',
      img: 'images/g8.jpg'
    },
    {
      name: 'Maester Aemon',
      img: 'images/g8.jpg'
    },
    {
      name: 'Jaime Lannister',
      img: 'images/g9.webp'
    },
    {
      name: 'Jaime Lannister',
      img: 'images/g9.webp'
    },
    {
      name: 'Voldermort',
      img: 'images/g10.jpg'
    },
    {
      name: 'Voldermort',
      img: 'images/g10.jpg'
    },
    {
      name: 'Cersei Lannister',
      img: 'images/g11.webp'
    },
    {
      name: 'Cersei Lannister',
      img: 'images/g11.webp'
    },
    {
      name: 'Jorah Mormont',
      img: 'images/g12.webp'
    },
    {
      name: 'Jorah Mormont',
      img: 'images/g12.webp'
    }

    ,
    {
      name: 'Robert Baratheon',
      img: 'images/g13.jpg'
    },
    {
      name: 'Robert Baratheon',
      img: 'images/g13.jpg'
    },
    {
      name: 'Ros',
      img: 'images/g14.jpg'
    },
    {
      name: 'Ros',
      img: 'images/g14.jpg'
    }

  ]

  cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.setAttribute('style', 'width: 100px; height: 100px;')
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}


//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    
    cards[optionOneId].setAttribute('src', 'images/white1.webp')
    cards[optionTwoId].setAttribute('src', 'images/white1.webp')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}
let steps = 0;
//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
  steps++;
  if (steps >= 7) {
      resultDisplay.textContent = 'Game Over! Out of Moves.';
      const cards = document.querySelectorAll('img');
      cards.forEach(card => card.removeEventListener('click', flipCard));
  } 
  else {
      this.setAttribute('src', cardArray[cardId].img);
      if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 6000);
      }
  }
}

const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', restartGame);

function restartGame() {
    
    steps = 0;
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    resultDisplay.textContent = '0';

    
    const cards = document.querySelectorAll('img');
    cards.forEach(card => card.parentNode.removeChild(card));

    
    createBoard();

    
    cards.forEach(card => card.addEventListener('click', flipCard));
}

createBoard()
})