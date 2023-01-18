// constantes no javascript
// as mesmas regras que servem para variáveis utilizaremos em constantes
// para criar uma constante utilizaremos a palavra reservada const
const nome = 'João'; // ao fazermos isso esse valor no espaço da memória não pode ser alterado
console.log(nome);
// ao contrário da criação da variável, sempre precisamos inicializa-la com um valor
/* const nome; (ERRADO) */


// exemplo de conta (operadores aritméticos + - * /)
const primeiroNumero = 5;
const segundoNumero = 4;
const resultado = primeiroNumero * segundoNumero; // multiplicação de números constantes

console.log(resultado);

// ponto a se resaltar, o javascript e uma linguagem de progamação de tipagem dinâmica ou seja ela vai aceitar os tipos de valores em uma mesma variável mesmo que você sobrescreva com outro tipo

// linguagem de tipagem dinâmica
let num = 1; // inicializamos com um number
console.log(num, typeof(num)); 
num = 'string'; // mudamos para uma String
console.log(num, typeof(num));
num = true; // mudamos para um valor booleano
console.log(num);

// quando quisermos saber o tipo da variável utilizamos a função typeof(variavel)

console.log(typeof(num)); 
console.log(typeof num);

// observação o sinal de + no JavaScript e utilizado para duas coisas: somar e concatenar depende do tipo de operação que você está fazendo

let n1 = '1';
let n2 = 1;

console.log(n1+n2); // nesse exemplo estamos juntando uma string a um número portanto concatena

n1 = 1;

console.log(n1+n2); // nesse caso vai somar os números