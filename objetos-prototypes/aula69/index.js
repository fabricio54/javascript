/* 
Javascript é baseado em protótipos para passa propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótiop (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o moto do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o top (null) até encontrar (ou não) tal membro.
*/
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// cria esta propriedade para todos os objetos 
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// isntância
const pessoa1 = new Pessoa('Luiz', '0.');
const data = new Date();

console.dir(pessoa1);
console.dir(data);