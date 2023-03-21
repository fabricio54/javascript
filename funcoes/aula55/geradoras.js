// funções geradoras
function* geradora1() {
    // Código qualquer
    yield 'Valor 1';
    // Código qualquer
    yield 'Valor 2';
    // Código qualquer
    yield 'Valor 3';
}

function*geradora2() {
    yield 0;
    yield 1;
    yield 2;
}
// delegando tarefas a geradora 3 e chamando na 4
function*geradora3() {
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

function*geradora4() {
    yield function() {
        console.log('Vim do y1')
    };

    // ... 

    yield function() {
        console.log('Vim do y2');
    };
}

// Quando chamamos a primeira vez a função ela retorna o primeiro valor e chama segunda retorna o segundo valor ...

//const g1 = geradora1();
//console.log(g1); // retorna o objeto da função
//console.log(g1.next()); // retorna a valor e a chave que //retornará done por que não acabou a chamada
//console.log(g1.next()); // mostrará o próximo valor
//console.log(g1.next()); // mostrará o próximo valor so que a //chave estára true por que acabou as chamadas
//console.log(g1.next()); // vamos ver 

// na chamada dessa função ele entrega o primeiro número
const g3 = geradora3();
console.log(g3.next().value);

// pegando todos os valores
// obs:nessa chamada ele não recomeça e sim continua a contagem
for(let valor of g3) {
    console.log(valor);
}

const g4 = geradora4();
const func1 = g4.next().value;
const func2 = g4.next().value;

func1();
func2();