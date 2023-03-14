// retorno de funções
// Retorna um valor
// Termina a função

function soma(v1, v2) {
    return v1 + v2;
}

console.log(soma(5, 4));

// função que não retorna nada mais faz alguma coisa

//document.addEventListener('click', function () {
//    document.body.style.backgroundColor = 'red';
//});

// função que retorna um objeto
function criaPessoa(nome, sobrenome) {
    return {
        nome: nome , sobrenome: sobrenome
    }
}


const p1 = criaPessoa('Tayna', 'Araujo');

// criando um objeto direto apartir de uma constante
const p2 = {
    nome: 'João',
    sobrenome: 'Araújo'
};

// vai retorna um objeto
console.log(typeof p1);
console.log(typeof p2);

// função que tem outra função que tem returno
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');

// nesse caso estamos retornando a função interna da função principal
console.log(fala);

// nesse caso captura o retorno da função: caso passe parêmetro a função mais interna ira pegar o retorno da constante fala e executala caso não aja parâmetro so retorna o nome da função
console.log(fala('Olá'));

// funcionalidade para funções que chamam funções mais internas

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    }
}

// pega o multiplicador e retorna a função 
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

// pega a constante que tem a função anônima e passado um parâmetro ela executa
console.log(duplica(6));
console.log(triplica(3));
console.log(quadriplica(2))