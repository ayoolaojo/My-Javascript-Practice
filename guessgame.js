let RandNum = Math.round( Math.random() *10  )  

let guess = prompt("guess a number between 1 to 10")

if(parseInt(guess) === RandNum) {
    alert("Awesome! You got it. The number is  " + RandNum)

} else {
    alert("Try again. The answer is " + RandNum)
}