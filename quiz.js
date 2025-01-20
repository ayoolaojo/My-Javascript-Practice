let correct = 0;
let answer1 = prompt(" Capital of Nigeria");
if (answer1.toUpperCase() === "ABUJA"){
    correct += 1;
}


let answer2 = prompt("Country with highest population in the world");

if (answer2.toUpperCase() === "CHINA") {
    correct += 1;
}


let answer3 = prompt ("programming language with same name as a snake ");

if (answer3.toUpperCase() === "PYTHON") {
    correct += 1;
}

let answer4 = prompt("Full meaning of FIFA") ;

if (answer4.toUpperCase() === "FEDERATION OF INTERNATIONAL FOOTBALL ASSOCIATION" ) {
    correct += 1;
}

let answer5 = prompt("Programming language used to structure webpage");

if (answer5.toUpperCase() === "HTML") {
    correct += 1;
}



if (correct===5) {
    document.write("You're a Champion! You got " + correct + " out of 5 questions correctly. ")

}  else if (correct >= 3) {
   alert("You're good! You got " + correct + "  out of 5 questions correctly")

}  else if (correct == 2 ) {
    alert("Fair! You got " + correct + "  out of 5 questions correctly")
} else {
    alert("You need to read more! You got " + correct + "  out of 5 questions correctly")
}






