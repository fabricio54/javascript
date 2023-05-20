// podemos importar tudo
//const mode = require('./mode');
/*
console.log(mode.falanome());
*/

// podemos importar algo específico
/*
const falanome = require('./mode').falanome;
console.log(falanome());
*/

// desestruturando o objeto inteiro
/*
const { nome, sobrenome, falanome } = mode;

console.log(nome, sobrenome, falanome());

const { Pessoa } = require('./mode');

const p1 = new Pessoa('Luiz');

console.log(p1);
*/
