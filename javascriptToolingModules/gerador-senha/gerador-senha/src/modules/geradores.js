// utilizando uma função interna do js para gerar caracteres
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

const geraMinuscula = () => String.fromCharCode(rand(97, 123))

const geraNumero = () => String.fromCharCode(48, 58);

const simbolo = ',.;~^[]{}!@#$%*()_+=-';

const geraSimbolo = () => simbolo[rand(0, simbolo.length)];

// exportando a função para fora do módulo

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        // avaliação de curto circuito

        // se a primeira avaliação for verdadeira o código executará (a segunda automaticamente será verdadeira)

        maiusculas && senhaArray.push(geraMaiuscula());

        minusculas && senhaArray.push(geraMinuscula());

        numeros && senhaArray.push(geraNumero());

        simbolos && senhaArray.push(geraSimbolo());

    }
    return senhaArray.join('').slice(0, qtd);
}


