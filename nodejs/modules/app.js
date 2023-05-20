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

// chamando o axios
/*
const axios = require('axios');

axios.get('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response))
    .catch(e => console.log(e));

    */
//const multiplicacao = require('./mode');

//console.log(multiplicacao(2, 3));

// navegando com variaveis nativas do js 'caminhos absolutos'
console.log(__filename);
console.log(__dirname);

// utilizando o path
const path = require('path');
// caminho das pastas
console.log(path.resolve(__dirname, '..', '..'));

