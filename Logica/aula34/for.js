// For in -> lê os indices ou chaves do objeto
//                 1       2      3
//const frutas = ['Pera', 'Maçã', 'Uva'];

// for tradicional
//for(let i = 0; i < frutas.length; i++){
//    console.log(frutas[i]);
//}

//for(let i in frutas) {
//    // ler os indices do array
//    console.log(i);
//    // ler o conteudo dentro do array
//    console.log(frutas[i]);
//}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// interage sobre as chaves do objeto
for(let chave in pessoa) {
    // interagindo a propriedades do objeto com o for in 
    console.log(chave, pessoa[chave]);
}

// acessando o mesmo valor de maneiras diferentes
console.log(pessoa.nome);
console.log(pessoa['nome']);

