// new Object
/*
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
};

const  objC = new Object();
objC.chave = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveB);
*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
let valor = 10;
// criando um prototipe desconto 
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
}
Produto.prototype.aumento = function (percentual) {
    this.preco = (this.preco * ((100+percentual)/100));
}

const produto = new Produto('Computador Gamer', 2500);
// criando um objeto literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

// atribuindo um prototype da classe produto
Object.setPrototypeOf(p2, Produto.prototype);

produto.aumento(10);
console.log(produto.preco);

p2.desconto(10);
console.log(p2.preco);
//produto.desconto(90);
//console.log(produto.preco);

// o p3 e do tipo Produto (o pai)
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(10);
console.log(p3);



