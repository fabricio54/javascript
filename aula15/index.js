// Métodos/funções que estão associados a instancia criada de um número
let num1 = 13;
let num2 = 2;
let num3 = 3.43242345234;

console.log(num1.toString() + num2); // observação: quando chamamos a função do string da classe number, ela retorna uma string e não modifica a varivel em si

// num1 = num1.toString -> agora sim estariamos alterando o valor e o tipo da variável (variável tipada)

console.log(typeof num1);

console.log(num1.toString(2)); // ao colocarmos 2 como parâmetro indicamos que a string deve retornar como binário

// definindo um total mínimo de casas decimais
console.log(num3.toFixed(2));

// solicitando a variável para ver se e ou não um inteiro
console.log(Number.isInteger(num3)); // perguntado atraves de um método da classe Number e passando a variável e recebendo o valor (true or false)

// solicitando se a conta e válida para a maquina do javascript 
let temp = num1 * 'ola';

console.log(Number.isNaN(temp)); // solicitando ao sistema se o valor que está armazenado no espaço de memória da variável é válido

// problemas com a inprecissão do javascript no calculo de contas que tem números decimais

let num4 = 0.7;
let num5 = 0.1;

num4 += num5;
num4 += num5;
num4 += num5;


num1 = Number(num4.toFixed(2)); // ao fazermos isso resolvemos o problema 

console.log(num4);
console.log(Number.isInteger(num4));

