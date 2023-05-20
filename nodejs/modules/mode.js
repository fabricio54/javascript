const nome = 'Luiz';
const sobrenome = 'Miranda';

const falanome = () => nome  + ' ' + sobrenome;


//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falanome = falanome;

// em todos os casos haverá exportação mesmo sem o objeto module
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falanome = falanome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(exports);

// outro exemplo com classe
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

// outra maneira de exportar
module.exports = {
    Pessoa, nome, sobrenome
}

module.exports = function(x, y) {
    return x * y;
}

module.exports = class Cachorro {
    constructor(nome){
        this.nome = nome;
    }
    
    latir() {
        console.log(`${this.nome} está fazendo au au`);
    }
}