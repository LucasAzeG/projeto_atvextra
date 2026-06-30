//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#div-form-geral')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let num1 = parseFloat(objFormDados.get('num1'))

    // Verifica se é divisível por 3 e por 7
if (num1 % 3 === 0 && num1 % 7 === 0) {
    console.log(num1 + " é divisível por 3 e por 7.");
} else {
    console.log(num1 + " não é divisível por 3 e por 7.");
}

divResultado.innerHTML = `O número: ${num1.toFixed(2).replace('.',',')}`

    formDados.reset()
    
    

})