const inquirer = require('inquirer')

inquirer.prompt([
    {type: 'input', name: 'notaLabPrat', message: 'Digite a nota da atividade prática  em laboratorio', peso: 2},
    {type: 'input', name: 'provaSemstre', message: 'Digite a nota da prova do semestre', peso: 5},
    {type: 'input', name: 'trabalhoTeorico', message: 'Digite a nota da prova do semestre', peso: 3}
]).then(respostas => {
    console.log(respostas.name)
})