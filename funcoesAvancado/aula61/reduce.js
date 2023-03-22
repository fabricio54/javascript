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