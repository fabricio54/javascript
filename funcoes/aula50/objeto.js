// funções fábricas
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        // atributos
        nome, sobrenome,

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
