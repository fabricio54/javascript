const numeros = [1, 2, 3];
const numeros2 = [4, 5, 6];

//const numeros3 = numeros.concat(numeros2, [7, 8, 9], 'Fabricio'); 
// método que recebe um array e concatena obs: podemos mandar mais numeros ou string que ele concatena separados por virgula
//console.log(numeros3);

// com o spread. obs: quando mandamos ...[1, 3, 2] dentro de um array ele irá concatenar de forma literal e não como outro array
const numeros3 = [...numeros, ...numeros2, ...[7, 8, 9]];
console.log(numeros3);