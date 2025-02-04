let dice = {
    sides:6,
    rollDice : function() {
        let randNum = Math.round(Math.random() * this.sides)

        console.log(randNum)
    }
}



const rollButton = document.querySelector(".rollButton")

const diceNumber = document.querySelector(".diceNumber")


rollButton.addEventListener("click",() => {
    let randNum = Math.floor(Math.random() * 6) + 1;

    diceNumber.textContent = randNum
})


