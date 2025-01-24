let questions= [
    ['How many legs does a dog have', 4 ],


    [  "How many States in Nigeria?", 36],

    ["How many wheels has a bicyle?" , 2],

    [ "How many days make one week? ", 7]


]

let correctAnswer = 0;
correct = [];
wrong = [];


for(i = 0; i < questions.length; i++) {
    let question = questions[i][0]
    answer =  questions[i][1]
    response = prompt(question)
    
    if( parseInt(response) === answer){
        correctAnswer += 1;
        correct.push(question)
        
    } else {
        wrong.push(question)
    }

}


document.write("You got " + correctAnswer + " questions right" + " The questions you got right are:"+ correct )

// document.write()