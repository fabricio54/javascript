// sintaxe para criação de uma classe em javascript
class Pessoa {
    // função construtora
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

// com factory function
function PessoaDois(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

PessoaDois.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

const p1 = new Pessoa('Fabricio', 'Miranda'); // utilizando classes
const p2 = new PessoaDois('Carla', 'Diniz'); // utilizando factory functions
console.log(p1);
console.log(p2);