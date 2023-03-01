// Tratamento de Erros

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        // lançando o ReferenceError
        throw new ReferenceError('x e y precisam ser números.');
    } return x + y;
}

//try {
//    console.log(naoExisto);
//} catch(error) {
//    console.log('nãoExisto não existe.');
//    console.log(error); // erro completo
//}

try {
    console.log(soma(2, 4));
    console.log(soma('x', 1));
} catch (error) {
    console.log(error);
}