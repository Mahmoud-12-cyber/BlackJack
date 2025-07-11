// Bulid BlackJack Game 
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message= ""
let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cards = [firstCard, secondCard]
let cardEl = document.getElementById("card-el")

//  Create a function , getRandomCard() 

function getRandomCard(){
    let randomNumber= Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } 
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }

}


// Creating Start Game Function

function startGame() {
    renderGame()
}

function renderGame() {

    // render out sum
    sumEl.textContent = "Sum: " + sum
    // render out first & second Card
    cardEl.textContent = "Cards: " 

    for(let i=0 ; i< cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }

     if (sum <=20) {
        message="Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message ="You've got Blackjack!" 
        hasBlackJack = true
    }
    else {
        message="You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

//  Creating New Card Function

function newCard() {
   let card = getRandomCard()
   sum+=card
   cards.push(card)
   console.log(cards)
   renderGame()
}






let person= {
    name: "Mahmoud",
    age: 26,
    country: "Egypt"
}


function logData(){
    console.log(person.name + " is " + person.age + " years old and live in " + person.country)
}

logData()

let hands = ["rock" ,"paper","scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random() *3)
    return hands[randomIndex]
}

console.log(getHand())




let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruit(){
    for(let i=0 ; i< fruit.length ; i++){
        if(fruit[i]==="🍎" ) {
            appleShelf.textContent+="🍎"
        }
        else if (fruit[i] === "🍊" ) {
            orangeShelf.textContent+= "🍊"
        }
    }
}

sortFruit()
   


