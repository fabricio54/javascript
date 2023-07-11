const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

const pessoas = [
    { nome: 'João'},
    { nome: 'Maria'},
    { nome: 'Eduardo'},
    { nome: 'Luiza'},
];

const json = JSON.stringify(pessoas, '', 2);

// importando a função que faz o papel de criar arquivos
const criaArquivo = require('./modules/escrever');
const lerArquivo= require('./modules/ler');

criaArquivo(caminhoArquivo, json);

// criando uma função para leitura de arquivo

async function lendoArquivo (caminhoArquivo) {
    const dados = await lerArquivo(caminhoArquivo)
    return dados
}

const dadosArquivo = lendoArquivo(caminhoArquivo)
.then(dados => console.log(dados)).catch(e => console.log(e));

console.log(dadosArquivo)
