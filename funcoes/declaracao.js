// declaração de função
function falaOi() {
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
// constante que recebe uma função
const souUmDado = function() {
    console.log('Sou um dado');
}
souUmDado();

// passando uma função para outra função
function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arraw function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    // criando um função que é outra função dentro do objeto
    falar: function() {
        console.log('Estou falando...');
    },

    // ou ja criar ela direto como um método do objeto
    falar() {
        console.log('Estou falando');
    }
}

// funções com parâmetros
// podemos passar parâmetros para a função mesmo sem definir. podemos tambem manipular com uma variavel interna da função ou objeto que chamasse arguments
function funcao() {
    console.log(arguments[2]);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8);

function soma(a, b = 2, c = 4) {
    console.log(a + b + c); // caso não mande valores sempre avera valores padrões
}

// enviando um objeto literal como parâmetro
function funcaoObjeto({nome, sobrenome, idade}) {
    // desestruturação de objeto na própria função ou um Array
    console.log(nome, sobrenome, idade);
}
funcaoObjeto({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 });

// criando uma função que recebe um operador, acumulador e vários números

function funcaoSoma(operador, acumulador, ...numeros) {
    // fazendo as operações de acordo com os parâmetros passados
    for(let numero of numeros) {
        if(operador === '+') {
            acumulador += numero;
        }else if(operador === '-') {
            acumulador -= numero;
        }else if(operador === '*') {
            acumulador *= numero;
        } else {
            acumulador /= numero;
        };
    }
    return acumulador;
}

console.log(funcaoSoma('+', 0, 2, 3, 4, 5, 6, 2));