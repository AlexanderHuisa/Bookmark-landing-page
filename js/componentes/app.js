const BtnSimpleBookmarking = document.querySelector('.simple__book');
const BtnSpeedySearching = document.querySelector('.speedy__search');
const BtnEasySharing = document.querySelector('.easy__sharing');

const divSimpleB = document.querySelector('.feature__content--simple-bookmarking');
const divSpeedyS = document.querySelector('.feature__content--speedy-searching');
const divEasyS = document.querySelector('.feature__content--easy-sharing');

BtnSimpleBookmarking.addEventListener('click',()=>{
    divSimpleB.style.display = 'inline-flex';
    divSpeedyS.style.display = 'none';
    divEasyS.style.display = 'none';
    BtnSimpleBookmarking.classList.add('main__features__nav--sub-line');
    BtnSpeedySearching.classList.remove('main__features__nav--sub-line');
    BtnEasySharing.classList.remove('main__features__nav--sub-line');
})
BtnSpeedySearching.addEventListener('click',()=>{
    divSimpleB.style.display = 'none';
    divSpeedyS.style.display = 'inline-flex';
    divEasyS.style.display = 'none';
    BtnSimpleBookmarking.classList.remove('main__features__nav--sub-line');
    BtnSpeedySearching.classList.add('main__features__nav--sub-line');
    BtnEasySharing.classList.remove('main__features__nav--sub-line');
})
BtnEasySharing.addEventListener('click',()=>{
    divSimpleB.style.display = 'none';
    divSpeedyS.style.display = 'none';
    divEasyS.style.display = 'inline-flex';
    BtnSimpleBookmarking.classList.remove('main__features__nav--sub-line');
    BtnSpeedySearching.classList.remove('main__features__nav--sub-line');
    BtnEasySharing.classList.add('main__features__nav--sub-line');
})
