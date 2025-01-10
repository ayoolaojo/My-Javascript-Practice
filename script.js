// document.getElementById("demo").innerHTML =  "My First Javascript code";


// document.getElementById('demo').style.color = 'blue';


// function myMul(x,y,z) {
//   return(x*y*z);
// }

// let a = myMul(2,5,4);
// console.log(a);


// function Sum(x,y){
//   return(x+y);
// }
// let z = Sum(5,7);
// console.log(z);


// function Sub(x,y){
//   return(x-y);
// }

// let e = Sub(10,7);
// console.log(e) ;

// person = {}
// person.name = "John";
// person.age =  40;


// console.log(person.name)

 

// function calculateNetIncome(x,y){
//   return x - y
// };
 

// let z = calculateNetIncome(5000, 1925);

// console.log(z)


// if (x > y) {
//   console.log(Profit)
// }


// let hour = prompt("input time");
// if(hour > 12){
//   greetings= 'good afternoon';
//   console.log(greetings)
// }

// if (hour==0 ){
//   greetings = 'invalid input'
//   console.log(greetings)
// }

//  else if(hour < 12)  {
//   greetings = "good morning";
//   console.log(greetings)
// };


// alert('Hello from Ayoola!');

// document.write("<h1>Welcome to Javascript Basics</h1>");

// alert('Thanks for visiting')

// alert("Hey! You're back for more?")

// console.log("program is complete");

// console.log('Start Program');

// alert('Help me fix this programme');

// alert('Can you get this message to appear?');

// document.write("<h2>My First Javascript Code</h2>");

// document.write("<p>I'm ppracticing debugging</p>");

// console.log ("End programme.")

// var message = "Hello!";
// alert(message);

// message = " Welcome to Javascript Basics";

// alert(message);

// prompt('what is your name?')

// let visitorName = prompt( "What is your name?")

// console.log(visitorName);

// let welcomeMessage = 'Hello' + visitorName;

// document.write(welcomeMessage)

// let visitor = prompt('what is your name?');

// let message = 'hello ' + visitor;

// alert(message);

// console.log(message);

// message += " we are so glad to see you.";

// message+= " You're really inproving your Javascript Coding game."

// console.log(message)


// let passphrase = "Open Sesame";
// console.log (passphrase.length);


// console.log(passphrase.toLowerCase());

// console.log (passphrase.toUpperCase())


// let stringToShout = prompt ( 'what should I shout?') ;

// let shout = stringToShout.toUpperCase() ;

// shout += "!!!";

// alert(shout);




// "<h2> This is a very simple way to learn the good basics of Javascript</h2>"

// let adjective = prompt('Please type an adjective');

// console.log(adjective);

// let verb = prompt("type a verb");

// console.log(verb);

//  let sentence = " <h2> This is a very simple way to  </h2> "  

// document.write(sentence)





// let noun = prompt("Please type a noun");

// console.log (noun);

// alert("Done Succesfully! Are you ready for the message?")

 
  
// let secPerMin = 60;
// let minPerHour = 60;
// let hrPerDay = 24;
// let numOfDays = 10;
// let totalsec = secPerMin * minPerHour * hrPerDay * numOfDays;

// console.log(totalsec);



 let randNum =  Math.random() * 5;

 let wholeRandNum = Math.round(randNum);

 console.log(wholeRandNum)

 let randNum = Math.round( Math.random()) * 2;

let guess = prompt("guess a number  between 1 to 2 ")

 if  (parseInt(guess) === randNum) {
     alert("Awesome! The number is " + randNum)

 } else  alert("Wrong!Try again  The number is " + randNum)



 console.log(typeof(guess))
 console.log(typeof(randNum))


 function roundUp(num) {
    return Math.round(num)
 }

 let result = roundUp(3.14) 
 document.write( "This is the " + result )





