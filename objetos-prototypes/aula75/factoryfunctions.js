// passando funções ja criadas para o prototype de um objeto em factory function
/*
function criaPessoa(nome, sobrenome) {
    // criando um objeto que recebe as funções e depois passamos ela para o prototype que retorna e um objeto
    const funcPessoas = {
        fala() {
            console.log(`${this.nome}, está falando.`)
        },
        come() {
            console.log(`${this.nome}, está comendo.`)
        },
        bebe() {
            console.log(`${this.nome}, está falando.`)
        }
    }
    // criando um objeto que recebe o objeto acima como funcoes do seu prototype e cria um objeto que tem as propriedades nome e sobrenome
    return Object.create(funcPessoas, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}
*/

// desacoplando as funcões acima
const falar = {
    falar() {
        console.log(`${this.nome}, está falando.`);
    }
}

const beber = {
    beber() {
        console.log((`${this.nome}, está bebendo.`))
    }
}

const comer = {
    comer() {
        console.log(`${this.nome}, está comendo.`);
    }
}

// com assign
/*
const pessoaPrototype = Object.assign({}, falar, comer, beber);
*/
const pessoaPrototype = {
    ... falar, ...comer, ...beber
};

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const pessoa = criaPessoa('Vanderleia', 'Lucena');