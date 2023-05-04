// criando uma função que cria segundos
function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + max);
}

// criando uma função de timeout para executar em um tempo determinado
/*
function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo * 1000);
}
*/
// fazendo com funções de callback

/*
esperaAi('primeiro', rand(5, 1), function() {
    esperaAi('segundo', rand(5, 1), function() {
        esperaAi('terceiro', rand(5, 1));
    });
});
*/
/*
esperaAi('primeiro', rand(5, 1));
esperaAi('segundo', rand(5, 1));
esperaAi('terceiro', rand(5, 1));
*/

// criando uma função utilizando promisses
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad Value');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// no código abaixo as funções estão sendo executadas pelo encadeamento estabelecido. a primeira função e chamada onde ela vai retorna uma classe que recebe uma função clásica do promise. onde teremos o resolve (executa quando não a erros) e reject (quando a erros) onde criamos uma utilizamos a classe setTimeout que recebe uma erofunction que se executada dispara a função resolve onde passamos como parâmetro a msg que veio dos parâmetros da função no then (resolve) recebe a msg e passa para a erofunction onde imprimimos e retornamos a função esperaAi com os parâmetros. onde podemos perceber que fazemos um encadeamento.

esperaAi('Conexão com o bd', rand(1, 5)).then(msg => {
    console.log(msg)
    return esperaAi('Buscando dados da base', rand(1, 5));
    })
.then(msg => {
    console.log(msg);
    return esperaAi('Tratando os dados da base', rand(1, 5));
})
.then((msg) => console.log('Exibe dados na tela'))
return esperaAi(2, rand(1, 5))
.catch(error => {
    console.log('Error', error)
});

console.log('Isso aqui será exibido antes de qualquer promisse.');