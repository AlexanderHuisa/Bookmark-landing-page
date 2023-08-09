const btnHamburger = document.querySelector(".hamburger");
const divMenu = document.querySelector(".header__hero--nav");
const divHeader = document.querySelector(".header__hero");
let active = false;

btnHamburger.addEventListener("click", ()=>{
    divMenu.classList.toggle("active");
    btnHamburger.classList.toggle("actived");
    if (active == false){
        divHeader.style.backgroundColor = "black"
        active = true;
    } else{
        divHeader.style.backgroundColor = "white";
        active = false;
    }
})