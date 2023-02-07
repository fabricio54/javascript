/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol)
*/

// nesse caso não estamos modificando o tipo e so trocando o valor inteiro da string. como sabemos o tipo string e indexado e dessa maneira ou seja elemento por elemento não podemos fazer a troca
//let nome = 'Luiz';
//nome = 'Andrea';

// como podemos observar não conseguimos trocar o valor indexado
//let nome = 'Augusto';
//nome[0] = 'P';

// observação: podemos fazer isso se o tipo for primitivo
//let a = 'A';
//let b = a; //Cópia do valor
//console.log(a, b);

// Quando fazemos isso não alteramos a segunda
//a = 'Outra coisa';


/* 
Referência (mutável) - arrays - objetos - function
*/

let a = [1, 2, 3];
let b = a;  // nesse caso b aponta para o endereço de a. o que modificarmos em a, b ou virse versa também será modificado. lemos b -> a aponta


