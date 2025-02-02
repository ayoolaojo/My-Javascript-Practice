const myHeading = document.getElementById("myHeading");

const myInput = document.getElementById("myInput");

const ChangeColorButton = document.getElementById('myButton') ;

const resetColor = document.getElementById("resetColor");


myHeading.style.color = "purple";

ChangeColorButton.addEventListener("click" , () => {
    myHeading.style.color = myInput.value;

    myInput.value = ""
})

resetColor.addEventListener("click", () => {
    myHeading.style.color = "black"
});



const myList = document.getElementsByTagName("li");

for ( let i = 0; i < myList.length; i++)  {
    myList[i].style.color = "purple" 
}


const errorNotPurple = document.querySelectorAll(".error-not-purple");

for ( let i = 0; i < errorNotPurple.length; i++)  {
    errorNotPurple[i].style.color = "red" 
}



const evens = document.querySelectorAll("li:nth-child(even)");

for ( let i = 0; i < evens.length; i++)  {
    evens[i].style.background = "lightgray" 
}


const newList = document.querySelectorAll("li");
for (let i = 0; i<newList.length;i++){
   newList[i].addEventListener("mouseover", () => {
    newList[i].textContent = newList[i].textContent.toUpperCase()
   });

   newList[i].addEventListener("mouseout",()=> {
    newList[i].textContent= newList[i].textContent.toLowerCase()
   })
}
















// const ul = document.querySelector("#listContainer");

// const input = document.querySelector("#input");

// const addItem = document.querySelector("#addItem");

// const removeItem = document.querySelector("#removeItem")

// const li = document.getElementsByTagName("li");

// const listContainer = document.getElementById('listContainer')



// addItem.addEventListener("click", () => {
//     let li = document.createElement("li");
//     li.textContent = input.value;

//     ul.appendChild(li);
    
//     input.value = " ";
// })


// removeItem.addEventListener("click", ()=> {
//     let li = document.querySelector("li:last-child")
//     ul.removeChild(li)


// });


 
    



    
   


// // const listItems = document.getElementsByTagName("li");

// // for( i=0 ; i < listItems.length; i++){ listItems[i].addEventListener('mouseover', () => {
// //     listItems[i].innerHTML = listIt
