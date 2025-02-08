const myHeading = document.getElementById("myHeading");

const myInput = document.getElementById("myInput");

const ChangeColorButton = document.getElementById('myButton') ;

const resetColor = document.getElementById("resetColor");

const errorNotPurple = document.querySelectorAll(".error-not-purple");

const myList = document.getElementsByTagName("li");

const evens = document.querySelectorAll("li:nth-child(even)")

const newList = document.querySelectorAll("li");

const newInput = document.querySelector("input.description") ;

const descriptionButton = document.querySelector("button.description") ;

const descriptionP = 
document.querySelector("p.description")

const toggleList = document.getElementById("toggleList");

const listDiv = document.querySelector(".list");

const addItemInput = document.querySelector("input.addItemInput");

const  addItemButton = document.querySelector("button.addItemButton");

const removeItemButton = document.querySelector("button.removeItemButton");








myHeading.style.color = "purple";

ChangeColorButton.addEventListener("click" , () => {
    myHeading.style.color = myInput.value;

    myInput.value = ""
})

resetColor.addEventListener("click", () => {
    myHeading.style.color = "black"
});





for ( let i = 0; i < myList.length; i++)  {
    myList[i].style.color = "purple" 
}




for ( let i = 0; i < errorNotPurple.length; i++)  {
    errorNotPurple[i].style.color = "red" 
}





for ( let i = 0; i < evens.length; i++)  {
    evens[i].style.background = "lightgray" 
}



for (let i = 0; i<newList.length;i++){
   newList[i].addEventListener("mouseover", () => {
    newList[i].textContent = newList[i].textContent.toUpperCase()
   });

   newList[i].addEventListener("mouseout",()=> {
    newList[i].textContent= newList[i].textContent.toLowerCase()
   })
}



    //  listDiv.addEventListener("mouseover", (event) => {
    //     if(event.target.Tagname =="LI") {
    //  event.target.textContent = event.target.textContent.toUpperCase() }
    // });
 
    // listDiv.addEventListener("mouseout",(event)=> {
    //     if (event.target.Tagname == "LI") {
    //     event.target.textContent= event.target.textContent.toLowerCase() }
    // })

   
 




descriptionButton.addEventListener("click", ()=> {
    descriptionP.textContent = newInput.value + " :"
   newInput.value = "";
})




toggleList.addEventListener("click", ()=> {
    if(listDiv.style.display =="none") {
        toggleList.textContent="Hide list";

        listDiv.style.display = "block"
    } else {
        toggleList.textContent = "Show list";
        listDiv.style.display ="none"
    }
})




addItemButton.addEventListener("click" , () =>{
    let ul = document.getElementsByTagName ("ul")[0];
    let li = document.createElement("li");
    ul.appendChild(li);

    li.textContent = addItemInput.value;
    addItemInput.value = ""
})


    
removeItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName ("ul")[0];

    let li = document.querySelector("li:last-child")

    ul.removeChild(li)
})















