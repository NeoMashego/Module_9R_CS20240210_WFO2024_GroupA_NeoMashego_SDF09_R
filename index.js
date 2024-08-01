// notes: let firstCard = math.floor(math.random() * 11) + 2; let secondCard = math.floor(math.random() * 11) + 2; let sum = firstCard + secondCard

let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard

let hasBlackJack = false    //default answer
let isAlive = true

// blackjack conditions set

if (sum <= 20){
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21){
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

// CASH OUT conditions
console.log(hasBlackJack)
console.log(isAlive)