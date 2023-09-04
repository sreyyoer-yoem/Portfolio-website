const menuIcon = document.querySelector(".menu-icon");
console.log(menuIcon);
const container = document.querySelector(".container");
console.log(container);

menuIcon.addEventListener("click",()=>{
    console.log(container);
    container.classList.toggle("change")
})