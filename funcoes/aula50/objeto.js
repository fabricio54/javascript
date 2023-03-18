// funções fábricas
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        // atributos
        nome, sobrenome,
        
        // ao fazermos isso trasnformamos esse método em um atributo indiretamente com o get
        get nomeInteiro() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeInteiro(valor) {
            valor = valor.split(' '); // dividindo a string completa em um array onde encontrar espaço
            this.nome = valor.shift();
            this.sobrenome = valor.join(' '); // pegando o resto da string e junta por espaço
        },

        // método do objeto
        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },

        altura: altura,
        peso: peso,

        // método sem parâmetro
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
console.log(p1.fala('falando sobre finanças.'));
console.log(p1.imc());
console.log(p1.nomeInteiro); // p1.nomeInteiro(); Ocorre um erro pois estamos acessndo um propriedade e não um método
p1.nomeInteiro = 'Maria Alves Pereira';
console.log(p1.nomeInteiro);
