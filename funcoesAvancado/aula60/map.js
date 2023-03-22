// função map
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// função que retorna o valor alterado
const numerosEmDobro = numeros.map(valor => valor * 2
);

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
// retorna a string
const string = pessoas.map(objeto => objeto.nome);
console.log(string);
// retorna so o objeto com o atributo idade
//const remove = pessoas.map(function(obj) {
//    delete obj.nome;
 //   return obj;
//});
// retorna o objeto com a chave com a adição de id
const id = pessoas.map(function(obj, indice){
    obj.id = indice;
    return obj;
});
console.log(id);