const prompt = require('prompt-sync')();

//Regiões e informações sobre o frete
const regiao1 = {
    name: "Sul",
    valorFrete: 1.00,
    valorComDesconto: 1.00 - (1.00*0.1)
}

const regiao2 = {
    name: "Sudeste",
    valorFrete: 1.20,
    valorComDesconto: 1.20 - (1.20*0.12)
}

const regiao3 = {
    name: "Centro-oeste",
    valorFrete: 1.30,
    valorComDesconto: 1.30 - (1.30*0.13)
}

const valorPorLitro = 5.5

let distanciaKM = parseFloat(prompt("Qual é a distância em quilômetros: "))
let quantidadePecas = parseInt(prompt("Qual é a quantidade de peças: "))
let regiao = parseInt(prompt("Qual é a região? (1-Sul, 2-Sudeste, 3-Centro-oeste): "))
let rastreamento = prompt("Deseja rastreamento? (S/n): ")


function valorFrete(region, quantityPieces){
    let valorFretePecas

    //Valor do frete com base na região 
    switch(region){
        case 1:
            if(quantityPieces > 1000){
                let restante = quantityPieces - 1000
                valorFretePecas = (1000 * regiao1.valorFrete) + (restante * regiao1.valorComDesconto)
            }
            else{
                valorFretePecas = quantityPieces * regiao1.valorFrete
            }
            break
        
        case 2:
            if(quantityPieces > 1000){
                let restante = quantityPieces - 1000
                valorFretePecas = (1000 * regiao2.valorFrete) + (restante * regiao2.valorComDesconto)
            }
            else{
                valorFretePecas = quantityPieces * regiao2.valorFrete
            }
            break
        case 3:
            if(quantityPieces > 1000){
                let restante = quantityPieces - 1000
                valorFretePecas = (1000 * regiao3.valorFrete) + (restante * regiao3.valorComDesconto)
            }
            else{
                valorFretePecas = quantityPieces * regiao3.valorFrete
            }
            break
        default:
            console.log("Digite um valor numérico para indicar as regiões. Digite 1 para a região Sul, 2 para a região Sudeste e 3 para a região Centro-oeste.")
    }

    return valorFretePecas
}



function calculoRastreio(distancia, quantityPieces, region, tracking){
    let valorTotal = 0

    //Rastreio
    if(tracking == 'S'){
        valorTotal = valorTotal + 200
    }

    
    //Valor do frete com base na região 
    switch(region){
        case 1:
            if(quantityPieces > 1000){
                let restante = quantityPieces - 1000
                valorTotal = valorTotal + (1000 * regiao1.valorFrete) + (restante * regiao1.valorComDesconto)
                valorFretePecas = (1000 * regiao1.valorFrete) + (restante * regiao1.valorComDesconto)
            }
            else{
                valorTotal = quantityPieces * regiao1.valorFrete
                valorFretePecas = valorTotal
            }
            break
        
        case 2:
            if(quantityPieces > 1000){
                let restante = quantityPieces - 1000
                valorTotal = valorTotal + (1000 * regiao2.valorFrete) + (restante * regiao2.valorComDesconto)
                valorFretePecas = (1000 * regiao2.valorFrete) + (restante * regiao2.valorComDesconto)
            }
            else{
                valorTotal = quantityPieces * regiao2.valorFrete
                valorFretePecas = valorTotal
            }
            break
        case 3:
            if(quantityPieces > 1000){
                let restante = quantityPieces - 1000
                valorTotal = valorTotal + (1000 * regiao3.valorFrete) + (restante * regiao3.valorComDesconto)
                valorFretePecas = (1000 * regiao3.valorFrete) + (restante * regiao3.valorComDesconto)
            }
            else{
                valorTotal = quantityPieces * regiao3.valorFrete
                valorFretePecas = valorTotal
            }
            break
        default:
            console.log("Digite um valor numérico para indicar as regiões. Digite 1 para a região Sul, 2 para a região Sudeste e 3 para a região Centro-oeste.")
    }

    //Valor do frete com base na quilometragem
    valorTotal = valorTotal + distancia * valorPorLitro

    return valorTotal
}

console.log(`Taxa do rastreamento: R$200.00`)
console.log(`Valor do frete pelas peças: R$${valorFrete(regiao, quantidadePecas).toFixed(2)}`)
console.log(`Valor do frete por quilômetro: R$${(distanciaKM*valorPorLitro).toFixed(2)}`)


console.log(`Total do Frete: R$${calculoRastreio(distanciaKM, quantidadePecas, regiao, rastreamento).toFixed(2)}`)

