const linkOne = document.querySelector('.link-one');
const parrafoOne= document.querySelector('.main__asked--parrafo-one');
const arrowOne= document.querySelector('.arrow-one');
const linkTwo = document.querySelector('.link-two');
const parrafoTwo= document.querySelector('.main__asked--parrafo-two')
const arrowTwo= document.querySelector('.arrow-two');
const linkThree = document.querySelector('.link-three');
const parrafoThree= document.querySelector('.main__asked--parrafo-three')
const arrowThree= document.querySelector('.arrow-three');
const linkFour = document.querySelector('.link-four');
const parrafoFour= document.querySelector('.main__asked--parrafo-four')
const arrowFour= document.querySelector('.arrow-four');
let flag = [1,1,1,1];

linkOne.addEventListener("click", () => {
  myFunction(0,parrafoOne,arrowOne);
});
linkTwo.addEventListener("click", () => {
  myFunction(1,parrafoTwo, arrowTwo);
});
linkThree.addEventListener("click", () => {
  myFunction(2,parrafoThree, arrowThree);
});
linkFour.addEventListener("click", () => {
  myFunction(3,parrafoFour, arrowFour);
});


function myFunction(num, parrafo, arrow) { 
  if(flag[num] == 0){
    parrafo.style.display = "none";
    arrow.style.backgroundImage = "url(../../images/icon-arrow.svg)";
    flag[num]=1;
  }else if(flag[num] == 1){
    parrafo.style.display = "block";
    arrow.style.backgroundImage = "url(../../images/arrow-up.svg)";
    flag[num]=0;
  }
}