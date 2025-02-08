const newInput = document.querySelector("input.addItemInput");
      const addItemButton = document.querySelector("button.addItemButton");
      const removeItemButton = document.querySelector(
        "button.removeItemButton"
      );

      const listDiv = document.querySelector(".listDiv");

      addItemButton.addEventListener("click", () => {
        let ul = document.getElementsByTagName("ul")[0];
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = newInput.value;
        newInput.value = "";
      });

      removeItemButton.addEventListener("click", () => {
        let ul = document.getElementsByTagName("ul")[0];
        let li = document.querySelector("li:last-child");
        ul.removeChild(li);
      });

      listDiv.addEventListener("mouseover", (event) => {
        if (event.target.tagName == "LI") {
          event.target.textContent = event.target.textContent.toUpperCase();
          event.target.style.color = "green"
        }
      });

      listDiv.addEventListener("mouseout", (event) => {
        if (event.target.tagName == "LI") {
          event.target.textContent = event.target.textContent.toLowerCase();
          event.target.style.color = "black"
        }
      });