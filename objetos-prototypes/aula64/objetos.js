// notações de como iniciar um objeto

const pessoa = {
    nome: 'Guga',
    sobrenome: 'Otávio'
};

const pessoa1 = new Object();
pessoa1.nome = 'Deda';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 30;

// criando um método
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`);
}

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// deletando um objeto ou chave
// delete pessoa.nome

console.log(pessoa["nome"]); // pessoa.nome
console.log(pessoa["sobrenome"]); // pessoa.sobrenome
console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

// for para objetos
for (let chave in pessoa) {
    console.log(pessoa1[chave]);
}