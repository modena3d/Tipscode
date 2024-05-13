const colorsNomes=['goldenrod', 'bisque', 'chocolate', 'darkmagenta', 'gray'];
const colorsExa=['#BC8F8F', '#4B0082', '#B22222', '#FFD700'];
const colorsRGB=['rgba(19, 141, 117)', 'rgba(176,224,230)', 'rgba(128,0,0)', 'rgba(199,21,133)'];
const colorsMix=['green', 'red', 'rgba(133, 122, 200)', '#f15025', 'goldenrod', '#B22222', 'rgba(176,224,230)', '#fff', 'rgba(199,21,133)','#FFD700', '#4B0082' ];

//-------------------BUTTONS--------------------------//
let btnNomes = document.getElementById('btnNomes')
let btnHEX = document.getElementById('btnExa')
let btnRGB = document.getElementById('btnRGB')
let btnMix = document.getElementById('btnMix')
//-------------------Visible--------------------------//
//btnNomes.style.visibility = 'hidden'
//alert('ok')
    btnNomes.style.display= 'none';
    btnHEX.style.display= 'none';
    btnRGB.style.display= 'none';
    btnMix.style.display = 'initial';    
//-------------------Text-FORMAT-------------------------//
const textFormat = document.querySelector('.tipe')
//-------------------Menu--------------------------//
///NOMES
const linkMenuNomes = document.querySelector('#linkNomes')
linkMenuNomes.addEventListener('click', function(){
    //alert('clicou');
    btnNomes.style.display= 'initial'
    btnHEX.style.display= 'none'
    btnRGB.style.display= 'none'
    btnMix.style.display = 'none'
    textFormat.textContent = 'NOMES'       
})
///EXI
const linkMenuHex = document.querySelector('#linkHex')
linkMenuHex.addEventListener('click', function(){
    btnNomes.style.display= 'none'
    btnHEX.style.display= 'initial'
    btnRGB.style.display= 'none'
    btnMix.style.display = 'none' 
    textFormat.textContent = 'HEX'       

})
///RGB
const linkMenuRGB = document.querySelector('#linkRgb')
linkMenuRGB.addEventListener('click', function(){
    btnNomes.style.display= 'none'
    btnHEX.style.display= 'none'
    btnRGB.style.display= 'initial'
    btnMix.style.display = 'none'  
    textFormat.textContent = 'RGB'       
})
///Mix
const linkMenuMix = document.querySelector('#linkMix')
linkMenuMix.addEventListener('click', function(){
    btnNomes.style.display= 'none'
    btnHEX.style.display= 'none'
    btnRGB.style.display= 'none'
    btnMix.style.display = 'initial'
    textFormat.textContent = 'MIX'       
})

//-------------------Text--FUNCTION------------------------//
const textColor = document.querySelector('.span-color')
///////Nomes
btnNomes.addEventListener('click', function(){
    //console.log('clicou')
    const randomNumber = Math.floor(Math.random() * colorsNomes.length )
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colorsNomes[randomNumber]
    //Text
    textColor.textContent = colorsNomes[randomNumber]
})
/////////HEX
btnHEX.addEventListener('click', function(){
    //console.log('clicou')
    const randomNumber = Math.floor(Math.random() * colorsExa.length )
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colorsExa[randomNumber]
    //Text
    textColor.textContent = colorsExa[randomNumber]
})
/////////RGB
btnRGB.addEventListener('click', function(){
    //console.log('clicou')
    const randomNumber = Math.floor(Math.random() * colorsRGB.length )
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colorsRGB[randomNumber]
    //Text
    textColor.textContent = colorsRGB[randomNumber]
})
/////////MIX
btnMix.addEventListener('click', function(){
    //console.log('clicou')
    const randomNumber = Math.floor(Math.random() * colorsMix.length )
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colorsMix[randomNumber]
    //Text
    textColor.textContent = colorsMix[randomNumber]
})
