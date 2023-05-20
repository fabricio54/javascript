// importando o modulo fs de leitura e escrita de arquivos
const fs = require('fs').promises; // retorna uma promisses
// importando o modulo path para caminhos de pastas/diretorios
const path = require('path');
// pegando um caminho específico de para criação do arquivo
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

const pessoa = [
    {nome: 'João'},
    {nome: 'Micheias'}, 
    {nome: 'Leo'},
    {nome: 'Rato'}
]

const json = JSON.stringify(pessoa, '', 2);

// sintaxe: informamos o caminho e os dados o objeto informa se queremos: w escrever independente se aquele arquivo ja existe (sobrescreve), a para atualizar sempre inserindo os dados não importa se for repetidos 
fs.writeFile(caminhoArquivo, json, { flag: 'w'});