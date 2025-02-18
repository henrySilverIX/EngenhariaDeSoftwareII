const readline = require("readline")

const meses = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro',
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma data (dd/mm/yyyy): ", (data) => {
    let newData = data.split("/")
    let stringDataFormatada = newData[0] +" de " + meses[parseInt(newData[1])] + " de " + newData[2]
    
    console.log(stringDataFormatada)
    rl.close()
})