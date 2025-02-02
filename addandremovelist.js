// const input =document.querySelector("input");

// const p =document.querySelector("p.description");

// const button = document.querySelector("button");

// const toggleList = document.getElementById("toggleList");

// const divList = document.querySelector(".list")


// toggleList.addEventListener("click" , () =>{
//     listDiv.style.display= "none";
// } )

// button.addEventListener("click", () =>{

//     p.textContent = input.value + " :" ;

//     input.value = "" ;
// } )


const toggleList = document.getElementById("toggleList");

const divList = document.querySelector(".list");

const addItemInput = document.querySelector("input.addItemInput")

const addItemButton = document.querySelector("button.addItemButton");


addItemButton.addEventListener("click" , () => {
    let ul = document.getElementsByTagName("ul")[0]
    let li = document.createElement("li");
     
    li.textContent = addItemInput.value

    ul.appendChild("li")
});