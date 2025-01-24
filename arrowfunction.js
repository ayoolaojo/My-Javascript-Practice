const multiply = (x,y) => {
    return x * y
}

console.log(multiply(5,6))


const tPain = () => {

    return "Tinubu why?"
}

console.log(tPain())




const input = document.getElementById("input");

const button = document.getElementById("button");

const title = document.getElementById("title");

const reset = document.getElementById("reset")

button.addEventListener("click", ()=> {
    title.style.color=input.value;
    
})

reset.addEventListener("click",() => {
     title.style.color = "black"
})

 

 