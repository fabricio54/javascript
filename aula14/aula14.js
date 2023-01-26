// strings -> As strings no JavaScript como na maioria das linguagens de progamação são indexadas, ou seja podemos acessar cada caracter individualemente
let umaString = "Um texto";

console.log(umaString[3]);

// podemos acessar por métodos que ja vem por padrão ao criar uma string

// usando a função charAt e o indice da string que deseja retornar
console.log(umaString.charAt(5));

// concatenar a string a outra string ou valor
console.log(umaString.concat(' qualquer coisa'));

// procurar por uma letra ou palavra completa.
// no exemplo abaixo usamos a função passando como parâmetro uma palavra ou letra e ela deverá retorna o indice ou não.
console.log(umaString.indexOf('texto'));

// usando o lestindiceOf que se diferencia por que começa de traz para frente
console.log(umaString.lastIndexOf('o'));

// expressões regulares
// assunto mais complexo que tende a pouco mais de estudo
// essa expressão deverá retorna as letras dessa string em minúsculo. obs: se termino com a letra g ele retorn um array se não especifico ele retorna de outra maneira
console.log(umaString.match(/[a-z]/g));

console.log(umaString.match(/[a-z]/));

// search retorna o indice onde a letra se encontra
console.log(umaString.search(/[a-z]/));

// também serve para procurar um caracter específico
console.log(umaString.search(/x/));

// substituição de uma palavra por outra
console.log(umaString.replace('Um', 'Outra')); 

// ou com expressões regulares que funciona do mesmo jeito
console.log(umaString.replace(/Um/, 'Outra'));

// substituindo um letra em uma string por outro caracter
// nesse caso substituou todo 'r' que aparece na string por  uma '#'
let outraString = "O rato roeu a roupa do rei de roma."
console.log(outraString.replace(/r/g, '#'));

// saber o tamanho da string
// Obs: quando é uma função tem os parênteses para passar ou não parâmetros. no caso em baixo em um atributo da string
console.log(outraString.length);

// como pegar uma parte específica da string
console.log(outraString.slice(2, 6)); // sempre devemos desconsiderar o ultimo caracter por não conta

// podemos trabalhar com negativos que no caso ele pegara a palavra invertida

// neste caso teremos o mesmo resultado com parâmetros diferentes
console.log(outraString.slice(32));
console.log(outraString.slice(-3));

// utilizando subString
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));

// como podemos dividir uma palavra passando um caracter e utilizando a função split
console.log(outraString.split(' ')); // nesse caso irá retornar um array com as palavras divididas pelo o caracter espaço

// também podemos pedir o valor exato de divisões que ele irá retorna
console.log(outraString.split(' ', 3)); // retornara um array das três primeiras palavras que serão retornadas pela função

// retorna a string em maiúsculos
console.log(outraString.toUpperCase());

// ou em minusculas
console.log(outraString.toLowerCase());



