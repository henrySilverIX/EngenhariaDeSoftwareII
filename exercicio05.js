const prompt = require('prompt-sync')();


//Função para fazer a operação aritmética
function calculo(num1, num2, operacao){
    let total
    switch(operacao){
        case "soma":
            total = num1 + num2
            break
        case "subtração":
            total = num1 - num2
            break
        default:
            console.log("Selecione uma operação válida: (adição ou subtração)")
    }

    return total
}

//Entrada de dados
let numero1 = parseInt(prompt("Digite o primeiro número: "))
let operacao = prompt("Operação a ser feita (soma ou subtração): ").toLowerCase()
if(operacao === 'subtracao' || operacao === '-'){
    operacao = 'subtração'
}
let numero2 = parseInt(prompt("Digite o segundo número: "))

//Exibição dos resultados
console.log(`O resultado é: ${calculo(numero1, numero2, operacao)}`)
