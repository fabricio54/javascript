// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// função de callback mais inxuta
const numerosFiltrados = numeros.filter(valor => valor > 10);

// mais verbosa
// criando função para filtrar os números
/*function callbackFilter(valor) {
    return valor > 10;
}*/

console.log(numerosFiltrados);

/*
for(let numero of numeros) {
    if(numero > 10){
        maioresQueDez.push(numero);
    }
}

console.log(maioresQueDez);
*/

// próximo exemplo:
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a 
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// primeiro exercicio
const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);

console.log(pessoasComNomeGrande);

// segundo exercicio
const pessoasComMaisDeCinquenta = pessoas.filter(valor => valor.idade > 50);

console.log(pessoasComMaisDeCinquenta);

// terceiro exercicio
const pessoasTerminaComA = pessoas.filter(valor =>
    // no objeto que foi passado pega a string em letras minuculas que termina em 'a'
    valor.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasTerminaComA);

