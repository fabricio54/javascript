//
const nomes = ['Maria', 'João', 'Eduardo', 'Carla', 'Juliana'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop

// simulando o push
nomes.splice(-1, 1, 'Luiz');

// simulando o onshifit
nomes.splice(0, 2, 'Vanderleia', 'Fabricio');

// silulando o pop
nomes.splice(nomes.length, 1);
//const removidos = nomes.splice(3, 2); // removendo o elemento apartir do indice e quantidade
console.log(nomes);