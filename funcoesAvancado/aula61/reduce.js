// Some todos os números (reduce)
// Returne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
// 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// dentro dos parâmetros da função estão: acumulador, valor, indice e o array, fora da função estará o valor inicial do array
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) {
        acumulador.push(valor);
    }return acumulador;
}, []);
console.log(pares);

const dobro = numeros.map(function(acumulador, valor){
    if(valor % 2 === 0){
        acumulador += valor;
    }return acumulador;
});
console.log(dobro);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 10},
    { nome: 'Rosana', idade: 64},
    { nome: 'Luiz', idade: 63},
];

const maisVelha = pessoas.reduce(function(acumulador, valor, indice, array){
    if(acumulador.idade > valor.idade){
        return acumulador;
    } return valor;
});

console.log(maisVelha);
