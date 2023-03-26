// Factory function / Construtor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const pessoa = criaPessoa('Fabricio', 'Alves');
//console.log(pessoa);
console.log(pessoa.nomeCompleto);

// criando um Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // travar o objeto: não cria novos atributos e tambem não altera mais valores
    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Fedora';

console.log(p1);