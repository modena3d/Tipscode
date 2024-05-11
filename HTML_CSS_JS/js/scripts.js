let form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    let numero1 = Number(document.querySelector('input[name="numero1"]').value)
    let numero2 = Number(document.querySelector('input[name="numero2').value) 
    let soma = numero1 + numero2
    let visor = document.querySelector('input[name="valor"]').value = soma
    console.log(numero1)
    console.log(numero2)
    console.log(soma)

})