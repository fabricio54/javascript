// Produto -> utilizando o conceito de herança para abstrair as coisas em comum para depois especificarmos um a um (Produto -> aumento, desconto)
// Camiseta = Cor, caneca = material, lapis
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// criando uma classe camiseta
function Camiseta(nome, preco, cor) {
    // estamos linkando o produto atraves do método da classe produto. passando um objeto no caso o próprio e os atributos nome e preco
    Produto.call(this, nome, preco);
}

// linkando o prototype com o prototype de produto atraves do método da classe Object. porem teremos um problema ao imprimirmos na tela porque a instância será do tipo produto sendo que é camiseta o objeto
Camiseta.prototype = Object.create(Produto.prototype);

// mudando o atributo do __proto__ construtor que deve receber a classe camiseta para corrigir o problema

Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Manga', 220,'branca');

console.log(camiseta);


