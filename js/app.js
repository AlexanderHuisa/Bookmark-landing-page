const BtnSimpleBookmarking = document.querySelector('.simple__book');
const BtnSpeedySearching = document.querySelector('.speedy__search');
const BtnEasySharing = document.querySelector('.easy__sharing');

const divSimpleB = document.querySelector('.feature__content--simple-bookmarking');
const divSpeedyS = document.querySelector('.feature__content--speedy-searching');
const divEasyS = document.querySelector('.feature__content--easy-sharing');

BtnSimpleBookmarking.addEventListener('click',()=>{
    divSimpleB.style.display = 'block';
    divSpeedyS.style.display = 'none';
    divEasyS.style.display = 'none';
})
BtnSpeedySearching.addEventListener('click',()=>{
    divSimpleB.style.display = 'none';
    divSpeedyS.style.display = 'block';
    divEasyS.style.display = 'none';
})
BtnEasySharing.addEventListener('click',()=>{
    divSimpleB.style.display = 'none';
    divSpeedyS.style.display = 'none';
    divEasyS.style.display = 'block';
})
