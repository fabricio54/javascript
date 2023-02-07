// criamos uma função para selecionar o arquivo html
function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    // primeira maneira de se resolver o problema do envio
    //form.onsubmit = function (evento) {
    //    evento.preventDefault();
    //    alert(1);
    //    console.log('Foi enviado.');
    //};

    // segunda maneira
    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
        // para não termos que selecionar todo documento selecionamos o mais específico. como sabemos que as classes onde iremos capturar estão dentro da classe form podemos especificar mais
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        function criaPessoa(nome, sobrenome, peso, altura) {
            return {
                nome: nome,
                sobrenome: sobrenome,
                peso: peso,
                altura: altura
            }
        }
        
        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));

        console.log(pessoas);
    }
    
    form.addEventListener('submit', recebeEventoForm);
    resultado.innerHTML += `<p>${pessoas[pessoas.length -1]}</p>`;
}
meuEscopo();