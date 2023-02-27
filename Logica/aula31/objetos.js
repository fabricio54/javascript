// atribuição via desestruturação
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//console.log(pessoa.endereco.rua);

// Atribuição via desestruturação
        // funciona como valor padrão
        // caso não exista
//const { nome = 'Não existe', sobrenome, idade } = pessoa;
//console.log(nome, sobrenome);

//const { endereco: { rua:r, numero}} = pessoa;
//console.log(r, numero);

// utilizando o resto da variável
const { nome, ...resto } = pessoa;
console.log(nome, resto);

