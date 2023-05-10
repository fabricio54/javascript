const nome = 'Fabricio';
const sobrenome = 'Alves';

// exportando diretamente
export const idade = 26;

export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export {
    nome,
    sobrenome,
};