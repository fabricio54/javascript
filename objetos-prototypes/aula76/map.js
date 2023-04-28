// resolvendo um problema comum no mundo da progamação
const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'},
];



/* erro
const novasPessoas = {};
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}
*/

// utilizando o conceito de map par resolver o problema
const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa});
}

console.log(novasPessoas);
// utilizando os métodos get e set para retorno
console.log(novasPessoas.get(2));