const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelector(".grand-child");

parent.addEventListener("click", (e) => {
    
    console.log("Parent");
});

child.addEventListener("click", () => {
    console.log("Child");
});

grandChild.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Grand Child");
});

document.addEventListener("click", (e) => {
   console.log("document");
});

 