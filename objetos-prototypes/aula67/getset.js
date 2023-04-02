// trabalhando com getters e setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        configurable: true, // configurável
        get: function() {  // criando a função getter (retorna valor)
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem'); // lançando uma excessão
            }

            estoquePrivado = valor;
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor;
        }
    }
}

//const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 500;
//console.log(p1.estoque);

const p2 = criaProduto('camisa');
p2.nome = 'pau';
console.log(p2.nome);
