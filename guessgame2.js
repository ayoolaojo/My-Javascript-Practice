let correctGuess;
let guessMore;


let randomNumber =Math.round(Math.random()) *5;
let guess = prompt('Input a number between 1 to 5');

if (parseInt(guess)===randomNumber) {
    correctGuess = true;

     document.write("Got it!")







    
}  else if ((parseInt(guess)  <  randomNumber)) { 
     alert("Please,try again. The answer is greater than  " + guess)



}   else if( (parseInt(guess)  >  randomNumber) ) {

    alert("Please,try again. The answer is lesser than  " + guess)

}     





