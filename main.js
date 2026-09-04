//Fething the HTML elements
const containerMap = document.querySelector("#movementMap");
const boxObject = document.querySelector("#myObject");

//Atempting to give the object a different starting point - Can be ignore for now
// boxObject.style.left = "160px";
// boxObject.style.top = "270px";

let AxisX = 0;
//NS: ---> Y = up and down
let AxisY = 0;
//NS: ---> X = left to right from the top of the screen

// Adding and adjusting movement speed of the object
let tempo = 15;

//Function to listen for keypress and to adjust possible movement for the object
document.addEventListener("keydown", (e) => {
  //Adjusting MovementSpace
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
  //Offset to control how close to the mouse pointed click it displays when it moved to the clicked point
  AxisX = e.offsetX - 35;
  AxisY = e.offsetY - 35;
  boxObject.style.left = `${AxisX}px`;
  boxObject.style.top = `${AxisY}px`;
});
