const linKOne = document.querySelector('.main__asked__questions--tittle-button');
const parrafoOne= document.querySelector('.main__asked--parrafo')
let bandera = 1;
linKOne.addEventListener('click',()=>{
    if(bandera == 1){
        parrafoOne.style.display = 'none';
        bandera=0;
    }else {
        parrafoOne.style.display = 'block';
        bandera = 1;
    }
})
