// notes: let firstCard = math.floor(math.random() * 11) + 2; let secondCard = math.floor(math.random() * 11) + 2; let sum = firstCard + secondCard
let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumEl = document.getElementById("sum-el");
console.log(sumEl);
let cardEl = document.getElementById("card-el");
console.log(cardEl);

let firstCard = getRandomCard()
let secondCard = getRandomCard()

let sum = firstCard + secondCard
let deck = [firstCard, secondCard]

let hasBlackJack = false    //default answer
let isAlive = true

let display = ""    //display message so console.log once at the end

function getRandomCard(){
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame(){
    renderGame()
}

// blackjack conditions set
function renderGame() {
if (sum <= 20){
    display = "Do you want to draw a new card?";
} else if (sum === 21){
   display = "Wohoo! You've got Blackjack!";
    hasBlackJack = true
} else {
    display = "Sorry, You're out of the game!";
    isAlive = false
}

// CASH OUT
    messageEl.textContent = display
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Card: " //+ deck[0] + " " + deck[1]
    for (let d = 0; d < deck.length; d++){
        cardEl.textContent += deck[d] + " "                     // check if it works console.log(deck[d])
    }
                                                                // conditions console.log(hasBlackJack) console.log(isAlive) console.log(display) alert(display)      so an answer can be seen
}

function newCard(){
    let card = getRandomCard();
    sum += card;                                            // sum = sum + card
    deck.push(card);
                                                            //console.log(deck);      checking if array works
    renderGame();
}