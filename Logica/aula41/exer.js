// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número não é divisivel por 3 e 5 = Retorne o próprio número
// checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100

function retornaNumero(numero) {
    if (typeof(numero) !== "number"){
        return numero;
    }else {
        if (numero % 3 === 0 && numero % 5 === 0) {
            return "FizzBuzz";
        }else if (numero % 3 === 0 || numero % 5 === 0) {
            return numero % 3 === 0 ? "Fizz" : "Buzz";
        }else {
            return numero;
        }
    }
};

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

console.log(retornaNumero(numAleatorio(0, 100)));