//const nomes = ['Eduardo', 'Maria', 'Joana'];
// String, Objetos, Funções, Números
//nomes[2] = 'João';
//delete nomes[2];
//console.log(nomes);

// Array construtor

/*
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
*/

/*
const nomes = ['Eduardo', 'Maria', 'Joana']; // array com todos os nomes 
//const removido = nomes.shift();// ultimo nome removido
nomes.unshift('João');
nomes.unshift('Wallace');
console.log(nomes);

// fatiando um array
const novo = nomes.slice(1, 3); // adiciona os nomes do intervalo informado
console.log(novo);
*/

// separando strings
const nome = 'Luiz Otávio Miranda';
const nomes = nome.split();
console.log(nomes);

// juntando um array em uma string
const nomes2 = ['Lívia', 'Andrade', 'Silva'];
const nomeCompleto = nomes2.join(' ');
console.log(nomeCompleto);
