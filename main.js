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

let tempo = 10;
document.addEventListener("keydown", (e) => {
  if (AxisY < 0) {
    AxisY = 0;
  } else if (AxisX < 0) {
    AxisX = 0;
  } else if (AxisY > 600) {
    AxisY = 600;
  } else if (AxisX > 900) {
    AxisX = 900;
  } else {
    if (e.key == "ArrowUp") {
      AxisY -= tempo;
    } else if (e.key == "ArrowRight") {
      AxisX -= tempo;
    } else if (e.key == "ArrownDown") {
      AxisY += tempo;
    } else if (e.key == "ArrowLeft") {
      AxisX += tempo;
    }
  }
  boxObject.style.left = `${AxisX}`;
  boxObject.style.top = `${AxisY}`;
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
