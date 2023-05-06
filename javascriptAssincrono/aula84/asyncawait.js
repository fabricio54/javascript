// async / await

// utilizando conceitos que ja entendemos encadeamos promessas uma nas outras até que todas se resolvam ou não

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('cai no erro');
            return;
        }

        setTimeout(() => {
            resolve(msg + ' promise resolvida');
        }, tempo);
    })
}

/*
esperaAi('Fase 1', 3000)
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', 2000);
    })
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 3', 1000);
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na fase:', fase);
    })
    .catch(e => console.log(e));
*/

// utilizando conceitos novos (async / await)

// ao colocarmos async dizemos que essa função e assíncrona e os trechos de códigos terão de esperar para serem executados até a função aceitar ou rejeitar uma promessa
async function executa() {
    // englobando todos as funções. caso aja erro ele deverá retorna para o bloco catch para tratalo
    try {
        // utilzamos await para que execute a função primeiro para depois continuar
        const fase1 = await esperaAi('Fase 1', 3000);
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', 3000);
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', 3000);
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();

// estados:
// pending -> pendente
// fullfilled -> resolvida
// reject -> rejeitada