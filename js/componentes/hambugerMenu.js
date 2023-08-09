const btnHamburger = document.querySelector(".hamburger");
const divMenu = document.querySelector(".header__hero--nav");

btnHamburger.addEventListener("click", ()=>{
    divMenu.classList.toggle("active");
    btnHamburger.classList.toggle("actived");
})