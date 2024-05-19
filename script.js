// console.log(document)
let btn1Element = document.getElementById("btn1");
let valueElement = document.getElementById("value");
let btn2Element = document.getElementById("btn2");
console.log(btn1Element, valueElement, btn2Element);
let value = 0;
valueElement.innerText = value;
btn1Element.addEventListener("click", () => {
  value += 1;
  valueElement.innerText = value;
});

btn2Element.addEventListener("click", () => {
    value -= 1;
    valueElement.innerText = value;
  });