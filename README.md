# EngenhariaDeSoftwareII

Primeira lista de exercícios de Javascript

1. Crie uma aplicação para efetuar o cálculo do índice de massa corporal. Considere os seguintes critérios:
1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.
2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em centímetros.
3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
4) Após as estradas de dados, atente-se a conversão das informações para dados do tipo float.
5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100).
6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através da expressão: M = peso (quilos) ÷ altura²
7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas descritivas utilizando os critérios abaixo:
a) Se M estiver abaixo de 16 : Baixo peso muito grave
b) Se M estiver entre 16 e 16,99: Baixo peso grave
c) Se M estiver entre 17 e 18,49: Baixo peso
d) Se M estiver entre 18,50 e 24,99: Peso normal
e) Se M estiver entre 25 e 29,99: Sobrepeso
f) Se M estiver entre 30 e 34,99: Obesidade grau I
g) Se M estiver entre 35 e 39,99: Obesidade grau II
h) Se M for maior que 40: Obesidade grau III
8) Ao término o sistema deve fornecer a seguinte saída para o usuário:
“<Nome> possui índice de massa corporal igual a <m> , sendo classificado como: .” *As informações em vermelho são variáveis e devem ser substituídas pelos seus respectivos valores calculadas dentro da aplicação.
2. Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo usuário. Considere os seguintes critérios:
Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”. Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”. Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”. Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados para o usuário.
Um aluno está encontrando dificuldades para entender como é composta a média final de determinada disciplina, a qual é composta pelas três notas seguintes:

![Notas e pesos](img/image.png)



Desenvolva uma aplicação em JS que receba as 3 notas, calcule e imprima a média ponderada.
A média ponderada é calculada pela fórmula:
((peso1 * nota1) + (peso2*nota2)+(peso3*nota3))/ (soma dos pesos)
Após concluir a média, o algoritmo deverá classificá-la conforme tabela abaixo.

![Classificação das notas](img/image-1.png)

Ao término, a aplicação deverá gerar como saída:
![Média do aluno](img/image3.png)