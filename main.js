//Fething the HTML elements
const containerMap = document.querySelector("#movementMap");
const boxObject = document.querySelector("#myObject");

//Atempting to give the object a different starting point
// boxObject.style.left = "160px";
// boxObject.style.top = "270px";

let AxisX = 0;
//NS: ---> Y = up and down
let AxisY = 0;
//NS: ---> X = left to right from the top of the screen

//To flip
// let flipped = false;

let tempo = 20;
document.addEventListener("keydown", (e) => {
  if (AxisY < 0) {
    AxisY = 0;
  } else if (AxisX < 0) {
    AxisX = 0;
  } else if (AxisY > 520) {
    AxisY = 520;
  } else if (AxisX > 820) {
    AxisX = 820;
  } else {
    if (e.key === "ArrowUp") {
      AxisY -= tempo;
    } else if (e.key === "ArrowLeft") {
      AxisX -= tempo;
      // Adding a flip with direction change to match movement, using animation
      boxObject.style.transform = "scaleX(-1)";
    } else if (e.key === "ArrowDown") {
      AxisY += tempo;
    } else if (e.key === "ArrowRight") {
      AxisX += tempo;
      //Adding another flip to have it change to corresponding direction with animation
      boxObject.style.transform = "scaleX(1)";
    }
  }
  boxObject.style.left = `${AxisX}px`;
  boxObject.style.top = `${AxisY}px`;
});

// Adding mouse control. Need to add a better limit, as it now moves outside the box on mouse controll.
containerMap.addEventListener("click", (e) => {
  AxisX = e.offsetX - 30;
  AxisY = e.offsetY - 30;
  boxObject.style.left = `${AxisX}px`;
  boxObject.style.top = `${AxisY}px`;
});

//The code below is fetched from google: only copied to study, test and adjust to my use of it later
//
//const img = document.getElementById('myImage');
// let isFlipped = false;

// window.addEventListener("keydown", (event) => {
//   // Check if the 'f' key is pressed (or use 'ArrowLeft', etc.)
//   if (event.key === "f") {
//     isFlipped = !isFlipped;
//     // Toggle horizontal mirror flip
//     img.style.transform = isFlipped ? "scaleX(-1)" : "scaleX(1)";
//   }
// });
//The HTML that was noted to it:
//<img id="myImage" src="example.jpg" alt="Sample" style="width: 300px; transition: transform 0.2s;"></img>
//NS: I'll be using (event.key === "ArrowLeft" || "ArrowRight") !
