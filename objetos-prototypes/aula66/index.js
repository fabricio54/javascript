// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    
    
    // construtor de uma propriedade
    Object.defineProperty(this, 'estoque', { // objeto e nome da chave
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // permissão para alterar
        configurable: true // permissão para reconfigurar ou apagar
    });
 
    // feito para fazer varios propriedades ao mesmo tempo
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: false, // permissão para alterar
            configurable: true // permissão para reconfigurar ou apagar
        },

        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor da chave
            writable: false, // permissão para alterar
            configurable: true // permissão para    alterar, apagar
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
delete p1.estoque; // permitido se o configurable estiver true
console.log(p1);
console.log(Object.keys(p1))