// criando uma função que pega um número aleatório de um limite estabelecido
function random(min, max) {
    const r = Math.random() * (max - min) + (min);
    return r;
}

// retorna o valor e convertemos e um número inteiro
let rand = Math.floor(random(1, 50));
console.log(rand);


// while e do while
//let i = 0;
//while (i <= 10) {
//    console.log(i);
//    i++;
//}

// executando o laço ate a condição ser falsa
//while (rand !== 10) {
//    console.log(rand = Math.floor(random(1, 50)));
//}

// com do while 
do {
    console.log(rand = Math.floor(random(1, 50)));
}while(rand !== 10);