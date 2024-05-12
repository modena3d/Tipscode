const colorsNomes=['#BC8F8F', 'rgba(176,224,230)', 'rgba(128,0,0)', '#rgba(199,21,133)'];
const colorsExa=['#BC8F8F', '4B0082', '#B22222', '	#FFD700'];
const colorsRGB=['#BC8F8F', 'rgba(176,224,230)', 'rgba(128,0,0)', '#rgba(199,21,133)'];
const colorsMix=['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

//-------------------BUTTONS--------------------------//
let btnNomes = document.getElementById('btnNomes')
let btnExa = document.getElementById('btnExa')
let btnRGB = document.getElementById('btnRGB')
let btnMix = document.getElementById('btnMix')
//-------------------Visible--------------------------//
//btnNomes.style.visibility = 'hidden'
    btnNomes.style.display= 'none';
    btnExa.style.display= 'none';
    btnRGB.style.display= 'none';
    btnMix.style.display = 'none';    

//-------------------Menu--------------------------//
const linkMenuNomes = document.querySelector('#linkNomes')
linkMenuNomes.addEventListener('click', function(){
    //alert('clicou');
    btnNomes.style.display= 'initial';
    btnExa.style.display= 'none';
    btnRGB.style.display= 'none';
    btnMix.style.display = 'none';        
})



//-------------------Text--------------------------//
const textColor = document.querySelector('.span-color')


btnMix.addEventListener('click', function(){
    console.log('clicou')
    const randomNumber = Math.floor(Math.random() * colorsMix.length )
    //backgorund-color
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colorsMix[randomNumber]
    //Text
    textColor.textContent = colorsMix[randomNumber]
})
