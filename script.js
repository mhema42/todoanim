// js - element
let completed = 0;
let index = 0;
let toDo = [];

// HTML - element
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const toDos = document.querySelector(".toDos");
const done = document.querySelector(".done");
const trashcan = document.querySelector("span");

toDos.innerText = index;
done.innerText = completed;

// Knapp för att lägga till uppgifter
button.addEventListener("click", function () {
  // hämta värde från input
  const text = input.value;

  // indexräknare för objekt i array
  index++;

  //uppdaterar räknaren med antal slutförda uppgifter
  toDos.innerText = index;
  done.innerText = completed;

  // kotrollera att textrutan inte är tom när vi klickar
  if (text.length == 0) {
    document.querySelector("small").innerText =
      "Input must not be empty";
    index--;
    toDos.innerText = index;
    done.innerText = completed;
    return;
  } else {
    document.querySelector("small").innerText = "";
  }

  // lägg till i att göra listan (ul)
  const item = document.createElement("li");
  list.appendChild(item);

  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  item.appendChild(itemLabel);

  // rensa bort texten från textrutan
  input.value = "";

  // pusha text från inmatning plus index till en array
  toDo.push({ text, index });

  // lägg till en trashcan efter varje item
  const trashcan = document.createElement("span");
  trashcan.innerHTML = "&#x1F5D1;";
  trashcan.setAttribute("class", "trashcan");
  item.appendChild(trashcan);

  // ändrar om en uppgift är utförd eller ej
  itemLabel.addEventListener("click", function () {
    // testa vilken class item har
    if (item.getAttribute("class") == "completed") {
      item.setAttribute("class", "");
      completed--;
    } else {
      item.setAttribute("class", "completed");
      completed++;
    }

    //uppdaterar räknaren med antal slutförda uppgifter
    toDos.innerText = index;
    done.innerText = completed;
  });

  // om man raderar en uppgift
  trashcan.addEventListener("click", function () {
    index--;
    // testa om uppgiften är utförd eller ej
    if (item.getAttribute("class") == "completed") {
      completed--;
      item.remove();
    } else {
      item.remove();
    }

    //uppdaterar räknaren med antal slutförda uppgifter
    toDos.innerText = index;
    done.innerText = completed;  

    // raderar det sista objektet i arrayen
    toDo.pop({ text, index });

   
    
  });
});
