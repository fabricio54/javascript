// IIFE -> Immediately invoked function expression
// função imediata

/*
(function() {
    const nome = 'Fabricio';

    console.log(nome); // ela irá executar o nome do escopo da função
})();

const nome = 'Qualquer coisa';
*/

(function(idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome; // pega a string que foi enviada como parâmetro e a constante que está no escopo da função estântania (global no caso) e retorna
    }

    function falaNome() {
        console.log(criaNome('Luiz')); // imprime na tela a string retornada da função cria nome que tem um parâmetro
    }

    falaNome(); // chamada da função no escopo global da função imediata
    console.log(idade, peso, altura); // imprimindo os dados dos parâmetros
})(30, 80, 1.80);// parâmetro da função 

