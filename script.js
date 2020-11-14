let container = document.querySelector("#container");

// default size of block of divs
let input = 36;
let allBlocks;

// create group of n*m block of divs,logic! specify grid(row*column) = user(input*input) and create user(input)^2 divs
let newPaper = () => {
  for (i = 1; i <= input * input; i++) {
    let block = document.createElement("div");
    block.classList.add(`blocks`);
    container.appendChild(block);
  }
  container.setAttribute("style", `grid-template-columns: repeat(${input},1fr)`, ` grid-template-rows: repeat(${input},1fr)`);
  allBlocks = document.querySelectorAll(".blocks");
};
newPaper();

// every block from allBlocks will have black color when hover
let blackPaint = () => {
  allBlocks.forEach((block) =>
    block.addEventListener("mouseover", (e) => {
      e.target.style.background = `rgb(22,22,22)`;
    })
  );
};
blackPaint();

let clear = () => {
  allBlocks.forEach((block) => (block.style.background = "white"));
  blackPaint();
};

let blank = document.querySelector("#clear");
blank.addEventListener("click", clear);

// creates new canvas,logic! removes all children calls default functions
let createCanvas = () => {
  do {
    input = parseInt(prompt("Enter number of blocks",48));
  } while (input > 100);
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  newPaper();
  blackPaint();
};

let newCanvas = document.querySelector("#new-canvas");
newCanvas.addEventListener("click", createCanvas);

// gives white color to divs thus erases
let erase = () => {
  allBlocks.forEach((block) =>
    block.addEventListener("mouseover", (e) => {
      e.target.style.background = `rgb(256,256,256)`;
    })
  );
};

let eraser = document.querySelector("#eraser");
eraser.addEventListener("click", erase);

let rainbowColors = () => {
  allBlocks.forEach((block) =>
    block.addEventListener("mouseover", (e) => {
      let random1 = Math.ceil(Math.random() * 256);
      let random2 = Math.ceil(Math.random() * 256);
      let random3 = Math.ceil(Math.random() * 256);
      e.target.style.background = `rgba(${random1},${random2},${random3},.75)`;
    })
  );
};
let rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", rainbowColors);

let value;
let searchForColor = () =>{
   value = colorPicker.value;
}
// Color picker,logic! paint btn click=>clicks the colorPicker,runs search for the selected color every 500ms
let colorPicker = document.querySelector("#colors");
let colors = () => {
  colorPicker.focus();
  colorPicker.click();
  setInterval(searchForColor,500)
  allBlocks.forEach((block) =>
    block.addEventListener("mouseover", (e) => {
      e.target.style.background = `${value}`;
    }));
};

let paint = document.querySelector("#paint");
paint.addEventListener("click", colors);

