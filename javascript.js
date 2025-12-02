

/*
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "blue";
div.style.border = "solid";
div.style.borderWidth = "1px";





for (let i = 0; i < (4 * 4); i++) {
  let div = document.createElement("div");
  div.classList.add("div");
  container.appendChild(div);
}
*/


const container = document.querySelector(".container");
container.style.border = "inset"
const box = document.createElement("div");
box.classList.add(".box");
const pixel = document.createElement("div");
const button = document.querySelector("button");
const wrap = document.querySelector(".wrap");
const header = document.querySelector(".header");

function dimension(num) {

  if (num === undefined) {
    num = 16;
  } 

for (let i = 0; i < num; i++) {
  const box = document.createElement("div");

  container.appendChild(box);

  button.addEventListener("click", (e) => {
    container.removeChild(box);
  })

    for(let j = 0; j < num; j++) {

      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      const allPixel = document.querySelectorAll("pixel")

      pixel.style.flex = "1 1 auto";
      pixel.style.height = 800/num + "px";
      pixel.style.width = 800/num + "px";
      box.appendChild(pixel);
      pixel.addEventListener(("mousedown"), (e) => {
        pixel.style.backgroundColor = "black";

        button.addEventListener("click", (e) => {
          box.removeChild(pixel);
        })
        clearButton.addEventListener("click", (e) => {
          pixel.style.backgroundColor = "white";
        })
    })
    }
}
};


dimension(1);

button.addEventListener("click", (e) => {
  let input = +prompt("Enter a number to change the dimensions of the grid(1-100)");
  for (let i = 0;; i++) {
    if(input > 100 || (input < 0) || isNaN(input) === true || Number.isInteger(input) === false || input <= -1) {
      input = +prompt("Enter a numer from 1-100");
    } else if (input === 0 ) {
      alert("Enter a number from 1-100")
      break;
    } else {
      dimension(input)
      break;
    }
  }
})

const clearButton = document.createElement("button");
clearButton.classList.add("clearButton");
clearButton.textContent = "Clear";
header.appendChild(clearButton);



/*
const div = document.createElement("div");
div.classList.add("div");

const box = document.createElement("div");
container.appendChild(box);

div.style.backgroundColor = "blue";
div.style.height = "200px";
div.style.width = "200px";
box.appendChild(div);
*/



/*
for (let i = 0;; i++) {
  const question = +prompt("1-100");
  if(question > 100 || (question < 1 && question > 0) || isNaN(question) === true || Number.isInteger(question) === false || question <= -1) {
    question = +prompt("Enter a numer from 1-100");
  } else if (question === 0 ) {
    alert("Enter a number from 1-100")
    break;
  } else {
    break;
  }
}
*/

for (let i = 0;; i++) {
  if(input > 100 || input < 0 || isNaN(input) === true || Number.isInteger(input) === false || input <= -1) {
    input = +prompt("Enter a numer from 1-100");
  } else if (input === 0 ) {
    alert("Enter a number from 1-100")
    break;
  } else {
    dimension(input)
    break;
  }
}