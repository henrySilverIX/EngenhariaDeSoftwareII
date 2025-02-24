const prompt = require('prompt-sync')();

class Funcionario{
    codigo;
    horasTrabalhadas;
    turno;
    categoria;

    constructor(cod, horasTrab, turno, cat){
        this.codigo = cod
        this.horasTrabalhadas = horasTrab
        this.turno = turno
        this.categoria = cat
    }

    //Métodos de cálculo
    calcularHoraTrabalhada(salarioMinimoEstadual){
        let valorDaHora
        switch(this.categoria){
            case 'G':
                if (this.turno === 'M' || this.turno === 'V'){
                    valorDaHora = salarioMinimoEstadual * 0.04
                }
                else{
                    valorDaHora = salarioMinimoEstadual * 0.06
                }
                break
            case 'F':
                if  (this.turno === 'M' || this.turno === 'V'){
                    valorDaHora = salarioMinimoEstadual * 0.01
                }
                else{
                    valorDaHora = salarioMinimoEstadual * 0.02
                }
                break
            default:
                return "Caracter digitado inválido. Digite G para Gerente ou F para Funcionário"
        }

        return valorDaHora
    }

    calcularSalarioInicial(salarioMinimoEstadual){
        return this.calcularHoraTrabalhada(salarioMinimoEstadual) * parseInt(this.horasTrabalhadas)
    }

    calcularAuxilioAlimentacao(salarioMinimoEstadual){
        if (this.calcularSalarioInicial(salarioMinimoEstadual) <= 800){
            return this.calcularSalarioInicial(salarioMinimoEstadual) * 0.25
        }
        else if (this.calcularSalarioInicial(salarioMinimoEstadual) > 800 && this.calcularSalarioInicial(salarioMinimoEstadual) <= 1200){
            return this.calcularSalarioInicial(salarioMinimoEstadual) * 0.20
        }
        else{
            return this.calcularSalarioInicial(salarioMinimoEstadual) * 0.15
        }
    }

    calcularSalarioFinal(salarioMinimoEstadual){
        return this.calcularSalarioInicial(salarioMinimoEstadual) + this.calcularAuxilioAlimentacao(salarioMinimoEstadual)
    }
}


let codigoFuncionario = parseInt(prompt('Digite o código do funcionário: '));
let horasTrabalhadas = parseInt(prompt('Digite as horas trabalhadas pelo funcionário: '));
let turnoTrabalhado = prompt('Digite o turno trabalhado (M - Manhã, V - Vespertino, N - Noite): ').toUpperCase();
let categoriaDeTrabalho = prompt('Digite a categoria de trabalho (G - Gerente ou F - Funcionário): ').toUpperCase();
let salario_minimo_estadual = parseFloat(prompt('Digite o salário mínimo estadual: '));

const funcionario = new Funcionario(codigoFuncionario, horasTrabalhadas, turnoTrabalhado, categoriaDeTrabalho);

//Impressão dos dados do funcionário
console.log(`Código do funcionário: ${funcionario.codigo}
Número de horas trabalhadas: ${funcionario.horasTrabalhadas}
Valor da hora trabalhada: R$${funcionario.calcularHoraTrabalhada(salario_minimo_estadual).toFixed(2)}
Salário Inicial: R$${funcionario.calcularSalarioInicial(salario_minimo_estadual).toFixed(2)}
Auxílio Alimentação: R$${funcionario.calcularAuxilioAlimentacao(salario_minimo_estadual).toFixed(2)}
Salário Final: R$${funcionario.calcularSalarioFinal(salario_minimo_estadual).toFixed(2)}`);