//const nomes = ['Eduardo', 'Maria', 'Joana'];
// String, Objetos, Funções, Números
//nomes[2] = 'João';
//delete nomes[2];
//console.log(nomes);

// Array construtor
const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'João Rola';
delete nomes[2];
console.log(nomes);

// valor por referência
// const novo = nomes // mesmo endereço de memória
const novo = [...nomes]; // cópia do arry nomes

novo.pop();
console.log(nomes);
console.log(novo);