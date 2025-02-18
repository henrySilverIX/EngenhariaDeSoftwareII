const readline = require("readline")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome: ", (nome) => {
    rl.question("Digite o seu peso: ", (peso) => {
        rl.question("Digite a sua altura: ", (altura) => {
            let alturaMetros = altura / 100
            let imc = peso / (alturaMetros*alturaMetros)
            console.log(`Seu IMC é : ${imc}`)
            let classificacao = ""
    
            if(imc < 16){
                classificacao = "Baixo peso - muito grave"
                console.log("Baixo peso - muito grave")
            }
            else if(imc >= 16 && imc < 16.99){
                classificacao = "Baixo peso - grave"
                console.log("Baixo peso - grave")
            }
            else if(imc >= 17 && imc < 18.49){
                classificacao = "Baixo peso"
                console.log("Baixo peso")
            }
            else if(imc >= 18.50 && imc < 24.99){
                classificacao = "Peso normal"
                console.log("Peso normal")
            }
            else if(imc >= 25 && imc < 29.99){
                classificacao = "Sobrepeso"
                console.log("Sobrepeso")
            }
            else if(imc >= 30 && imc < 34.99){
                classificacao = "Obesidade grau I"
                console.log("Obesidade grau I")
            }
            else if(imc >= 35 && imc < 39.99){
                classificacao = "Obesidade grau II"
                console.log("Obesidade grau II")
            }
            else{
                classificacao = "Obesidade grau III"
                console.log("Obesidade grau III")
            }
            console.log(`${nome} possui índice de massa corporal igual a ${imc}, sendo classificado como: ${classificacao}.`)


            rl.close()
        })
    })
})

