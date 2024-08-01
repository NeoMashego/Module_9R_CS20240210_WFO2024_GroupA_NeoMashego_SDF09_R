// notes: let firstCard = math.floor(math.random() * 11) + 2; let secondCard = math.floor(math.random() * 11) + 2; let sum = firstCard + secondCard
let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumEl = document.getElementById("sum-el");
console.log(sumEl)

let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard

let hasBlackJack = false    //default answer
let isAlive = true

let display = ""    //display message so console.log once at the end

// blackjack conditions set
function startGame() {
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
// conditions console.log(hasBlackJack) console.log(isAlive) console.log(display) alert(display)      so an answer can be seen
}