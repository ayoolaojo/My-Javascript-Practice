const list = document.getElementById("list");

const button = document.getElementById("button");

button.addEventListener("click",  () => {
    if(list.style.display == "none"){
    button.textContent = "Hide content"
    list.style.display = "block"
    }
    else{
     button.textContent = "Display"   
    list.style.display = "none"
    }
    
})