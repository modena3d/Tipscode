/*//////////////IMG1/////////////////*/
let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomDiceImage1 = './imgs/dice' + randomNumber1 + '.png' // dice.2.png

let image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomDiceImage1)/*obs foma 1 de setar o setAttribute*/

/*//////////////IMG2/////////////////*/
let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomImageSource2 = './imgs/dice' + randomNumber2 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)/*obs foma 2 de setar o setAttribute*/

/*///////////////h1/////////////////*/
if(randomNumber1 > randomNumber2){
   document.querySelector('h1').innerHTML = 'Jogador 1: 🏆WINs!'
}else if(randomNumber1 === randomNumber2){
   document.querySelector('h1').innerHTML = 'Empate😫'
}else{
   document.querySelector('h1').innerHTML = 'Jogador 2: 🏆WINs!'
}
/*///////////////Button////////////////////*/

let btPlayGame = document.getElementById('btn');

btPlayGame.addEventListener('click', function(){
   let img1 = image1.setAttribute('src', randomImageSource1)
   let img2 = document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

})
