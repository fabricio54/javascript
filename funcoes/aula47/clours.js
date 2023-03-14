function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Merentiel')
const funcao2 = retornaFuncao('Gil');

console.log(funcao());// a função sempre irá retorna Merentiel
console.log(funcao2());// a função sempre irá retorana Gil