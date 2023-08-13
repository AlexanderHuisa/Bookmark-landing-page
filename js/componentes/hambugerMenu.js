const btnHamburger = document.querySelector(".hamburger");
const line = document.querySelectorAll(".line");
const logo = document.querySelector(".logo-header");
const divMenu = document.querySelector(".header__hero--nav");
const divHeader = document.querySelector(".header__hero");
let active = false;

console.log(logo);

btnHamburger.addEventListener("click", ()=>{
    divMenu.classList.toggle("active");
    btnHamburger.classList.toggle("actived");
    if (active == false){
        divHeader.style.backgroundColor = "#242946";
        changeColor(line, "white");
        logo.style.filter = "invert(100%)";
        active = true;
    } else{
        divHeader.style.backgroundColor = "white";
        changeColor(line, "black");
        logo.style.filter = "invert(0%)";
        active = false;
    }
})

function changeColor(item, color){
    item.forEach(i => {
        i.style.backgroundColor= color;
    })
}