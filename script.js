let inputElem = document.getElementById("adding-input")
let buttonElem = document.getElementById("adding-button")
let listenElem = document.getElementById("adding-ul")


buttonElem.addEventListener("click", addElementToList)

function addElementToList() {
  let inputValue = inputElem.value;
  console.log(inputValue);
  let li = document.createElement("li");
  li.innerText = inputValue;
  listenElem.appendChild(li);
}