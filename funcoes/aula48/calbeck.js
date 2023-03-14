// função que retorna um número aleatório dos limites estabelecidos
function rand(min=1000, max=3000) {
    const num = Math.random() * (max - min ) + min;
    return num;
}

function f1(callbeck) {
    // utilizando conceitos de callbeck
    setTimeout(function(){
        console.log('f1');
        // verificando se existe o callbeck
        if (callbeck) callbeck();
    }, rand());
}

function f2(callbeck) {
    setTimeout(function(){
        console.log('f2');
        // verificando se existe o callbeck
        if (callbeck) callbeck();
    }, rand());
}

function f3(callbeck) {
    setTimeout(function(){
        console.log('f3');
        // verificando se existe o callbeck    
        if (callbeck) callbeck();
    },rand());
}

// essas funções deveram retorna pela ordem dos miléssimos de segundos. mais o primeiro a retornar e o print fora das funções
//f1();
//f2();
//f3();
// a única coisa que temos certeza e que o olá mundo abaixo irá executar primeiro por não ter um timeout
//console.log('Olá Mundo!');

// criando a ordem certa de execução de cada função
/*
f1(function () {
    f2(function () {
        f3(function() {
            console.log('Olá mundo!');
        });
    });
});*/

f1(f1Callback);

