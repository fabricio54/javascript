// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];
/*
const pares = numeros.filter(function(valor){
  if(valor % 2 === 0){
    return valor;
  }  
});

console.log(pares);

const dobraValores = pares.map(function(valor){
    return valor * 2;
});

console.log(dobraValores);

const somaTudo = dobraValores.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
});

console.log(somaTudo);
*/

// tudo em uma declaração
const numerosPares = numeros.filter(valor => valor % 2 == 0).map(valor => valor * 2).reduce(function(acumulador, valor){
    return acumulador + valor;
});

console.log(numerosPares);