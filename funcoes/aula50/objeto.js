// funções fábricas
function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome,

        // método da função
        fala: function (assunto) {
            return `${nome} está ${assunto}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
