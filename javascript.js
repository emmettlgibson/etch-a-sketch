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
const div = document.createElement("div");



function dimension(num) {

for (let i = 0; i < num; i++) {
  const box = document.createElement("div");
  container.appendChild(box);

    for(let j = 0; j < num; j++) {
      const div = document.createElement("div");
      div.style.flexShrink = "1";
      div.style.flexGrow = "1";
      div.style.flexBasis = "auto";

      div.style.height = 800/num + "px";
      div.style.width = 800/num + "px";
      box.appendChild(div);
      div.addEventListener(("mousedown"), (e) => {
        div.style.backgroundColor = "black";
      })
    }
  }
}

dimension(32);

let newDiv = document.createElement("div");
newDiv.textContent = "div";

const h1 = document.querySelector("h1");
h1.append(newDiv);



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