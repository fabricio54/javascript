// métodos úteis
// copiando objetos

const produto = {nome: 'Caneca', preco: 1.8 };
//const outraCoisa = produto; // outra coisa aponta para produto ou seja, quando alterar uma constante altera a outra porque essas constantes apontam para o mesmo endereço de memória

produto.nome = 'Luiz Otávio';
//console.log(outraCoisa);
console.log(produto);

// copiando um produto
const outraCoisa = {...produto}; // copiando o objeto para a constante
outraCoisa.nome = 'Leo';
console.log(outraCoisa);

// utilando outro método para copiar
const caneca = Object.assign({}, produto); // utilizamos o método assign onde passamos um objeto vazio e que queremos copiar
console.log(caneca);

// descrevendo uma propriedade de um objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); 

console.log(Object.keys(produto)); // retorna as chaves
console.log(Object.values(produto)); // retorna os valores das chaves
console.log(Object.entries(produto)); // retorna as chaves e os valores

// desistruturando
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}