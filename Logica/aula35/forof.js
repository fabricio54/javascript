// For of
const nome = 'Luiz Otávio';
const nomes = ['Luiz', 'Otávio', 'Henrique'];

// For clássico - Geralmente com Interáveis (array ou strings)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em sim (iteráveis, arrays ou strings)

// For Clássico
//for (let i = 0; i < nome.length; i++) {
//    console.log(nome[i]);
//}

// For In
//for (let i in nome) {
//    console.log(nome[i]);
//}

// For Of
// pegando o valor de cada indice da string
for(let valor of nome) {
    console.log(valor);
}

// for multidimensional utiliznando o for of
// pegando todos os caracteres da lista de strings
for(let valor of nome) {
    for(let indece of valor){
        console.log(indece);
    }
}

console.log('###');

// forEach como outra opção sintaxe mais siples
nomes.forEach(element => {
    console.log(element);
});

// forEach com outra sintaxe
nomes.forEach(function(elemento) {
    console.log(elemento);
})


