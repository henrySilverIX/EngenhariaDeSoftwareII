//Não se esqueça de importar o prompt-sync
//Digite: npm install prompt-sync

const prompt = require('prompt-sync')();

const pesoAtividadePratica = 2
const pesoProvaSemestre = 5
const pesoTrabalhoTecnico = 3

const notaAtivPrat = prompt('Nota da atividade prática em laboratório: ');
const notaProvaSem = prompt("Nota da prova do semestre: ")
const notaTrabTec = prompt("Nota do trabalho técnico: ")

let notaFinalPonderada = ((notaAtivPrat * pesoAtividadePratica) + (notaProvaSem * pesoProvaSemestre) + (notaTrabTec * pesoTrabalhoTecnico)) / (pesoAtividadePratica + pesoProvaSemestre + pesoTrabalhoTecnico)
let classificacao = ""


//Classificando a nota do aluno
if(notaFinalPonderada <= 5){
    classificacao = "F"
    console.log("F")
}
else if(notaFinalPonderada <= 6){
    classificacao = "E"
    console.log("E")
}
else if(notaFinalPonderada <= 7){
    classificacao = "D"
    console.log("D")
}
else if(notaFinalPonderada <= 8){
    classificacao = "C"
    console.log("C")
}
else if(notaFinalPonderada <= 9){
    classificacao = "B"
    console.log("B")
}
else{
    classificacao = "A"
    console.log("A")
}


console.log(`A média do aluno é = ${notaFinalPonderada} e a sua classifcação é ${classificacao}`)