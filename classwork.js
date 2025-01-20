// function randomNumber(range) {
//  return  Math.round(Math.random() * range) 
// }


// let compRand = randomNumber(3000);

// let guess;

// let attempt = 0;

// while( guess !== compRand) {




//     guess = randomNumber(3000);
//     attempt += 1;
// }

// document.write("The number is " + guess + " It took you " + attempt + " attempts") 




/*function randomNumber(range) {
    return  Math.round(Math.random() * range)
 }

 let randNum = randomNumber(5);
 let guess;
 let guessCount = 0;
 let response = false;


do{
    guess = prompt("input  a number between 1 to 5")

    guessCount ++

    if(parseInt(guess)  === randNum) {
        response = true;
    }
} while (!response)

    document.write("You guesses right. The number is " + randNum + " Your guess count is " + guessCount)
*/


// let guess;
// let randNum = getRandomNumber;
// let attempts = 0;

// function getRandomNumber(range) {
//     Math.round(Math.random() * range)
// }

// document.write(getRandomNumber(10))

let vowels = ["a", "e", "i", "o", "u"] 

let isVowel = false;
search = prompt("input an aphabet").toLowerCase()

for( let i = 0; i < vowels.length; i++) {
    let vowel=vowels[i];



   if(search===vowel) {
     
    isVowel = true;
    
   }
 }

 if(isVowel===true){
    document.write(search + " is a vowel")
 } else {
    document.write(search + " is a consonant")
 }