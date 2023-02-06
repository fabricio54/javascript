// conceito iniciais de Orientação a objetos

// primeira maneira mais básica. criando apartir de uma constante
//const pessoa = {
//    // nesse caso não precisamos declarar se é uma variável ou constante e também separamos por virgula as propriedades do objeto
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 25
//};

//console.log(pessoa.nome);
//console.log(pessoa.sobrenome);
//console.log(pessoa.idade);//

// também podemos criar uma função que cria o objeto

// chamamos essa funtion de factory: retorna objetos
function criaPessoa(nome, sobrenome, idade){
    // desse modo ele me retornará um objeto quando a função for chamada
    return {
        // propriedades do objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        
        // diferentimente de outras linguagens de progamação. no javascript e muito mais simples a criação de métodos de objetos. seria como se estivesimos criando uma função. mais como é um objeto tecnicamente chamamos de métodos
        // métodos do objeto
        fala(){
            console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`);
        }
    }
}

const pessoa1 = criaPessoa('Fabricio', 'Alves', 25);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

pessoa1.fala();