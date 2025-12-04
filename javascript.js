

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

const clearButton = document.createElement("button");
clearButton.classList.add("clearButton");
clearButton.textContent = "Clear - (Grid/Gradient)";
header.appendChild(clearButton);

const rainbow = document.createElement("button");
rainbow.classList.add("rainbow");
rainbow.textContent = "Rainbow";
header.appendChild(rainbow)

const gradient = document.createElement("button");
gradient.classList.add("gradient");
gradient.textContent = "Gradient";
header.appendChild(gradient);

const black = document.createElement("button");
black.classList = "black";
black.textContent = "Black";
header.appendChild(black);




function randomNumber() {
  return Math.round(Math.random() * 255);
  };



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
          pixel.style.flex = "1 1 auto";
          pixel.style.height = 800/num + "px";
          pixel.style.width = 800/num + "px";
          box.appendChild(pixel);

  pixel.addEventListener(("mouseover"), (e) => {
    pixel.style.backgroundColor =`black` //black;
      })
  rainbow.addEventListener("click", (e) =>{
    pixel.addEventListener(("mouseover"), (e) => {
    pixel.style.backgroundColor =`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;
      })
    })
  gradient.addEventListener("click", (e) => {
    let divOpacity = 0;
    pixel.addEventListener(("mouseover"), (e) => {
    pixel.style.opacity = `${divOpacity += 0.1}`;
        })
      })
  black.addEventListener("click", (e) => {
    pixel.addEventListener(("mouseover"), (e) => {
    pixel.style.backgroundColor =`black`;
        })
      })
  clearButton.addEventListener("click", (e) => {
    pixel.style.backgroundColor = "white";
  pixel.addEventListener("mouseover", (e) => {
    divOpacity = 1;
    pixel.style.opacity = `1`;
      })
    })
  }
 }
};


dimension();

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
console.log(randomNumber());

const color = document.querySelector(".randomColor");
color.style.backgroundColor =`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;
color.style.height = "200px";
color.style.width = "200px";

color.addEventListener("click", (e) => {
  color.style.backgroundColor =`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;
})



function dimensionGradient(num) {
  if (num === undefined) {
    num = 16;
  } 

for (let i = 0; i < num; i++) {
  const box = document.createElement("div");
  container.appendChild(box);

    for(let j = 0; j < num; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.flex = "1 1 auto";
      pixel.style.height = 800/num + "px";
      pixel.style.width = 800/num + "px";
      box.appendChild(pixel);
      let divOpacity = 0;
      pixel.addEventListener(("mouseover"), (e) => {
        pixel.style.opacity = `${divOpacity += 0.1}`;
        pixel.style.backgroundColor =`black`;
    })

    }
}
};
*/


/*
pixel.addEventListener(("mouseover"), (e) => {
  pixel.style.backgroundColor =`black` //black;

clearButton.addEventListener("click", (e) => {
  pixel.style.backgroundColor = "white";
  pixel.style.opacity = `${divOpacity = 1}`;
    })

    })
    rainbow.addEventListener("click", (e) =>{
      pixel.addEventListener(("mouseover"), (e) => {
      pixel.style.backgroundColor =`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;
          })
       })



    gradient.addEventListener("click", (e) => {
      let divOpacity = 0;
      pixel.addEventListener(("mouseover"), (e) => {
      pixel.style.opacity = `${divOpacity += 0.1}`;
      pixel.style.backgroundColor =`black`;
  })
  })
  black.addEventListener("click", (e) => {
    pixel.addEventListener(("mouseover"), (e) => {
    pixel.style.backgroundColor =`black`;
})
})
*/

