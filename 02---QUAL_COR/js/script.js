const colors=['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

const btn = document.getElementById('btn')
const textColor = document.querySelector('.span-color')

btn.addEventListener('click', function(){
    console.log('clicou')
    const randomNumber = Math.floor(Math.random() * 4+1 )

    document.body.style.backgroundColor = colors[randomNumber]
    textColor.textContent = colors[randomNumber]
})