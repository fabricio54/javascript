// getters e setters

// trabalhando com propriedades privadas da classe
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
}

const c1 = new Carro('Gol');

// testando
for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1);

c1.velocidade = 44;

console.log(c1.velocidade);