function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('cai no erro');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na Promisse');
        }, tempo);
    });
}

// Promisse.all Promise.race Promise.resolve Promise.reject

/*
const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000)
    //'Outro valor'
];
*/

// resolve todas as promessas caso não tenha nenhum erro 
/*
Promise.all(promises) 
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});
*/

// resolve e entrega a primeira promessa resolvida
/* observação: como as strings não são promessas ela entrega por ja está resolvida */
/*
Promise.race(promises) 
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});
*/
// fazendo um exemplo na prática simulando se a página web ja está em cache
function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    }else {
        return esperaAi('Baixei a Página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => console.log(dadosPagina))
.catch(e => console.log(e));