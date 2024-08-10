const addBoxButton = document.querySelector("[data-add-box]");
const grid = document.querySelector(".grid");
const boxes = document.querySelectorAll(".box");

addBoxButton.addEventListener("click", () => {
    const box = document.createElement("div");
    box.classList.add("box");
    grid.append(box);
});

// Click does not work for newly created boxes
// because event listener is only registered for existing boxes

// boxes.forEach((box) => {
//     box.addEventListener("click",(e) => {
//         box.classList.toggle("clicked");
//     })
// })

// adding event listener to document

document.addEventListener("click", (e) => {
   if(e.target.matches(".box")){
    e.target.classList.toggle("clicked");
   }
});

// adding event listener to grid

grid.addEventListener("click", (e) => {
    if(e.target.matches(".box")){
     e.target.classList.toggle("clicked");
    }
 });
 