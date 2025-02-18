const readline = require("readline")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual é a sua idade: ", (idade) =>{
    if (idade < 15){
        console.log("Criança")
    }
    else if(idade >= 15 && idade < 30){
        console.log("Jovem")
    }
    else if(idade >= 30 && idade < 60){
        console.log("Adulto")
    }
    else{
        console.log("Idoso")
    }

    rl.close()
})