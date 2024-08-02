let messageEl = document.getElementById("message-el");  //console.log(messageEl);
let sumEl = document.getElementById("sum-el");          //console.log(sumEl);
let cardEl = document.getElementById("card-el");        //console.log(cardEl);
let playerEl = document.getElementById("player-el");    //console.log(playerEl)

let player = {
    name: "Neo",
    chips: 200
}
let deck = []
let sum = 0
let hasBlackJack = false    //default answer
let isAlive = false
let display = ""    //display message so console.log once at the end

playerEl.textContent = player.name + ": R" + player.chips

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

// game starter conditions set
function startGame(){                                               // edit later playerEl = prompt("Please enter your name")
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    deck = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// blackjack conditions set
function renderGame() {
    if (sum <= 20){
        display = "Do you want to draw a new card?";
    }   else if (sum === 21){
    display = "Wohoo! You've got Blackjack!";
        hasBlackJack = true
    }   else {
        display = "Sorry, You're out of the game!";
        isAlive = false
    }
        messageEl.textContent = display
        sumEl.textContent = "Sum: " + sum
        cardEl.textContent = "Card: "                                   //+ deck[0] + " " + deck[1]
            for (let d = 0; d < deck.length; d++){
                cardEl.textContent += deck[d] + " "                     // check if it works console.log(deck[d])
            }                                                           // conditions console.log(hasBlackJack) console.log(isAlive) console.log(display) alert(display)      so an answer can be seen
}

// new card conditions
function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card;                                             // sum = sum + card
        deck.push(card); 
        renderGame();
    }
}
