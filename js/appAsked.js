const linkOne = document.querySelector('.link-one');
const parrafoOne= document.querySelector('.main__asked--parrafo-one')
const linkTwo = document.querySelector('.link-two');
const parrafoTwo= document.querySelector('.main__asked--parrafo-two')
const linkThree = document.querySelector('.link-three');
const parrafoThree= document.querySelector('.main__asked--parrafo-three')
const linkFour = document.querySelector('.link-four');
const parrafoFour= document.querySelector('.main__asked--parrafo-four')
let flag = [0,0,0,0];

linkOne.addEventListener("click", () => {
  myFunction(0,parrafoOne);
});
linkTwo.addEventListener("click", () => {
  myFunction(1,parrafoTwo);
});
linkThree.addEventListener("click", () => {
  myFunction(2,parrafoThree);
});
linkFour.addEventListener("click", () => {
  myFunction(3,parrafoFour);
});


function myFunction(num, parrafo) { 
  if(flag[num] == 0){
    parrafo.style.display = "none";
    flag[num]=1;
  }else if(flag[num] == 1){
    parrafo.style.display = "block";
    flag[num]=0;
  }
}