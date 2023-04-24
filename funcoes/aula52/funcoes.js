// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123423;
    const metodoInterno = function() {
        
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    // Atributos ou métodos públicos
    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');


