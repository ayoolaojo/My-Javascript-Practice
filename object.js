let Olasco = {
    gender:"male",
    relationship : "married",
    age : 41,
    height : 1.87 ,

    skills : ["html" , "java","PhP", "SQL"]
}


for( let prop in Olasco) {
    document.write("<p>" + Olasco[prop] + "</p>")
}






document.write("My name is Olasco. I am " + Olasco["relationship"] + ". I have " + Olasco["skills"].length + " skills. My skills are : " + Olasco["skills"]  )



let correctAnswer;
let response = prompt(question);
let answer;
let questions = [

    {
        question: "How many legs has a dog?" ,

        answer: 4,
    } ,

    {
        question : "How many states in Nigeria?",

        answer : 36,


    } ,

    {

        question : "How many States in the US?",

        answer : 50,


    }
]

for (i = 0; i < questions.length; i++) {
    let question = questions[i][questions]
    let answer = questions[i][answer]

    if(response===answer) {
       correctAnswer++
    }
}