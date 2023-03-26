// reatribuição via array
/*
let a = 'A';   // criando e inicializando as variaveis
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = [1, 2, 3];// reatriabuindo valores nas variaveis

console.log(letras);
*/

//                0  1  2  3  4  5  6  7  8
//const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ... rest, ...spread
//const [primeiroNumero, segundoNumero, ...resto] = numeros; // atribuição via desistruturação. pega o primeiro valor e o segundo valor no array e atribui as variáveis criadas e a variavel que vem apos os pontinhos pega todo o resto
//console.log(primeiroNumero, segundoNumero, resto);

//const [um, , tres, , cinco, , sete] = numeros; // podemos pular os nomes de variáveis e o valores
//console.log(um, tres, cinco);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);



